const pluginSlugs = {
      htPlugins: [
          "ht-contactform",
          "data-captia",
          "docus",
          "ever-compare",
          "extensions-for-cf7",
          "faster-youtube-embed",
          "ht-easy-google-analytics",
          "ht-feed",
          "ht-instagram",
          "ht-mega-for-wpbakery",
          "ht-newsletter-for-elementor",
          "ht-portfolio",
          "ht-slider-for-elementor",
          "ht-social-share",
          "insert-headers-and-footers-script",
          "just-tables",
          "quickswish",
          "really-simple-google-tag-manager",
          "whols",
          "wishsuite",
          "wp-news-magazine",
          "ht-team-member",
          "ht-wpform",
      ],
      hasThemes: [
          "coupon-zen",
          "99fy-core",
          "product-screenshot",
          "ht-builder",
          "ht-menu-lite",
          "pixelavo",
          "preview-link-generator",
          "sirve",
          "swatchly",
          "wc-sales-notification",
          "wp-education",
          "wp-plugin-manager",
          "wptemplata",
      ],
      devItems: [
          "hashbar-wp-notification-bar",
          "ht-blocks",
          "ht-event",
          "ht-mega-for-elementor",
          "ht-service",
          "woolentor-addons",
          "wc-builder",
          "wp-politic",
          "wp-education",
          "wp-film-studio",
          "wp-insurance",
          "support-genix-lite",
      ]
  };

  document.getElementById("htPluginsBtn").addEventListener("click", function() {
      openLinksInNewTabs(pluginSlugs.htPlugins);
  });

  document.getElementById("hasThemesBtn").addEventListener("click", function() {
      openLinksInNewTabs(pluginSlugs.hasThemes);
  });

  document.getElementById("devItemsBtn").addEventListener("click", function() {
      openLinksInNewTabs(pluginSlugs.devItems);
  });

  function openLinksInNewTabs(slugs) {
      slugs.forEach(slug => {
          const link = `https://wordpress.org/support/plugin/${slug}/`;
          window.open(link, "_blank");
      });
  }