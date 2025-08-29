import { ComponentType, JSX, SVGProps, useEffect, useState } from "react";

type RatingItems = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  link: string;
  iconProps: SVGProps<SVGSVGElement>;
  ratingType: string;
  rating?: number | string;
  repo?: string;
  field?: "stars" | "forks";
};

export default function Ratings({
  icon: Icon,
  link,
  iconProps,
  ratingType,
  rating,
  repo,
  field
}: RatingItems): JSX.Element {
  const [dynamicRating, setDynamicRating] = useState<number | string>(rating ?? "");

  useEffect(() => {
    if (repo && field) {
      fetch(`https://api.github.com/repos/galio-org/galio`)
        .then(res => res.json())
        .then(data => {
          if (field === 'stars') setDynamicRating(data.stargazers_count);
          if (field === 'forks') setDynamicRating(data.forks_count);
        })
        .catch(() => setDynamicRating("N/A"));
    }
  }, [repo, field])
  // Format large numbers (e.g., 3200 -> 3.2K)
  const formatRating = (rating: number | string): string => {
    if (typeof rating === 'number') {
      if (rating >= 1000000) {
        return `${(rating / 1000000).toFixed(1)}M`;
      } else if (rating >= 1000) {
        return `${(rating / 1000).toFixed(1)}K`;
      }
      return rating.toString();
    }
    return rating;
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-1.5
                text-xs font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800
                hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-150 no-underline
                focus:outline-none focus:ring-1 focus:ring-[#ff1270] focus:ring-offset-1"
    >
      <div className="flex gap-1 items-center">
        {Icon && <Icon {...iconProps} className={`w-3.5 h-3.5 ${iconProps?.className || ''}`} />}
        {ratingType && (
          <span className={dynamicRating !== '' ? `border-r border-gray-300 dark:border-gray-600 pr-1.5` : ``}>
            {ratingType}
          </span>
        )}
      </div>
      {dynamicRating !== '' && (
        <div className="pl-1.5 text-[#ff1270] font-semibold">
          {formatRating(dynamicRating)}
        </div>
      )}
    </a>
  );
}

