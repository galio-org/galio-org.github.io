import { useEffect } from "react";

interface CarbonAdsProps {
  serve?: string;
  placement?: string;
}

export default function CarbonAds({ 
  serve = "CE7IPK3L", 
  placement = "galioio" 
}: CarbonAdsProps) {
  useEffect(() => {
    const existingAd = document.querySelector('#carbonads');
    if (existingAd) {
      existingAd.remove();
    }

    const existingScript = document.getElementById('_carbonads_js');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = `https://cdn.carbonads.com/carbon.js?serve=${serve}&placement=${placement}`;
    script.id = '_carbonads_js';
    script.async = true;
    
    const carbonContainer = document.getElementById('carbon-ads-container');
    if (carbonContainer) {
      carbonContainer.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.getElementById('_carbonads_js');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      const adToRemove = document.querySelector('#carbonads');
      if (adToRemove) {
        adToRemove.remove();
      }
    };
  }, [serve, placement]);

  return (
    <div 
      id="carbon-ads-container" 
      className="max-w-sm mx-auto"
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Carbon Ads Tailwind-compatible styling */
          #carbonads {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
            display: block;
            overflow: hidden;
            max-width: 330px;
            text-align: center;
            font-size: 12px;
            line-height: 1.35;
          }

          .dark #carbonads {
            background-color: #1f2937;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          #carbonads a {
            color: inherit;
            text-decoration: none;
          }

          #carbonads a:hover {
            color: inherit;
          }

          .carbon-wrap {
            display: flex;
            align-items: flex-start;
            padding: 12px;
            gap: 12px;
          }

          .carbon-img {
            display: block;
            margin: 0;
            line-height: 1;
            flex-shrink: 0;
          }

          .carbon-img img {
            display: block;
            margin: 0;
            max-width: 130px;
            width: 130px;
            height: auto;
            border-radius: 4px;
          }

          .carbon-text {
            flex: 1;
            display: block;
            line-height: 1.35;
            text-align: left;
            color: #374151;
            font-weight: 500;
          }

          .dark .carbon-text {
            color: #d1d5db;
          }

          .carbon-text:hover {
            color: #3b82f6;
          }

          .carbon-poweredby {
            display: block;
            padding: 6px 12px;
            background: repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(0, 0, 0, 0.025) 5px, rgba(0, 0, 0, 0.025) 10px),rgb(116, 124, 139);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 600;
            font-size: 9px;
            line-height: 1;
            color:rgb(114, 21, 106);
            text-decoration: none;
            transition: color 150ms ease-in-out;
          }

          .dark .carbon-poweredby {
            background: repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(255, 255, 255, 0.025) 5px, rgba(114, 19, 19, 0.03) 10px),rgb(191, 44, 152);
            color: #9ca3af;
          }

          .carbon-poweredby:hover {
            color: #374151;
          }

          .dark .carbon-poweredby:hover {
            color: #f3f4f6;
          }
        `
      }} />
    </div>
  );
}