import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
  const svgString = '<svg viewBox="0 0 20 21" role="img" aria-labelledby="gift-box" class="gifts-menu__icon"><title id="gift-box">Gifts</title><defs><polygon id="path-1" points="9.09090909e-05 0 19.3881818 0 19.3881818 20.0960909 9.09090909e-05 20.0960909"></polygon></defs><g id="V1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Cell-4-2" transform="translate(-1083.000000, -24.000000)"><g id="Group-3" transform="translate(1083.000000, 24.000000)"><mask id="mask-2" fill="white"><use xlink: href="#path-1"></use></mask><g id="Clip-2"></g><path d="M18.0246364,10.087 C18.0246364,10.1733636 17.9519091,10.2460909 17.8655455,10.2460909 L17.6782727,10.2460909 L16.3146364,10.2460909 L3.07372727,10.2460909 L1.71009091,10.2460909 L1.52281818,10.2460909 C1.43645455,10.2460909 1.36372727,10.1733636 1.36372727,10.087 L1.36372727,7.56518182 C1.36372727,7.47790909 1.43645455,7.40518182 1.52281818,7.40518182 L9.01190909,7.40518182 L14.601,7.40518182 L17.8655455,7.40518182 C17.9519091,7.40518182 18.0246364,7.47790909 18.0246364,7.56518182 L18.0246364,10.087 Z M16.3146364,18.6624545 C16.3146364,18.6988182 16.281,18.7324545 16.2446364,18.7324545 L10.3755455,18.7324545 L10.3755455,11.6097273 L16.3146364,11.6097273 L16.3146364,18.6624545 Z M9.01190909,18.7324545 L3.14372727,18.7324545 C3.10645455,18.7324545 3.07372727,18.6988182 3.07372727,18.6624545 L3.07372727,11.6097273 L9.01190909,11.6097273 L9.01190909,18.7324545 Z M6.711,1.36336364 C7.94918182,1.36336364 8.95554545,2.37063636 8.95554545,3.60790909 L8.95554545,5.85245455 L6.711,5.85245455 C5.47372727,5.85245455 4.46645455,4.84518182 4.46645455,3.60790909 C4.46645455,2.37063636 5.47372727,1.36336364 6.711,1.36336364 L6.711,1.36336364 Z M10.3755455,4.95790909 C10.3755455,3.86972727 11.261,2.98518182 12.3491818,2.98518182 C13.4382727,2.98518182 14.3228182,3.86972727 14.3228182,4.95790909 C14.3228182,5.36063636 14.1973636,5.73063636 13.9882727,6.04154545 L10.3755455,6.04154545 L10.3755455,4.95790909 Z M17.8655455,6.04154545 L15.4928182,6.04154545 C15.6128182,5.70154545 15.6864545,5.33972727 15.6864545,4.95790909 C15.6864545,3.11790909 14.1891818,1.62063636 12.3491818,1.62063636 C11.491,1.62063636 10.7155455,1.95609091 10.1237273,2.49063636 C9.65009091,1.04972727 8.30827273,-0.000272727273 6.711,-0.000272727273 C4.72190909,-0.000272727273 3.10281818,1.61881818 3.10281818,3.60790909 C3.10281818,4.55245455 3.47736364,5.40245455 4.07554545,6.04154545 L1.52281818,6.04154545 C0.682818182,6.04154545 9.09090909e-05,6.72518182 9.09090909e-05,7.56518182 L9.09090909e-05,10.087 C9.09090909e-05,10.927 0.682818182,11.6097273 1.52281818,11.6097273 L1.71009091,11.6097273 L1.71009091,18.6624545 C1.71009091,19.4533636 2.35281818,20.0960909 3.14372727,20.0960909 L16.2446364,20.0960909 C17.0355455,20.0960909 17.6782727,19.4533636 17.6782727,18.6624545 L17.6782727,11.6097273 L17.8655455,11.6097273 C18.7055455,11.6097273 19.3882727,10.927 19.3882727,10.087 L19.3882727,7.56518182 C19.3882727,6.72518182 18.7055455,6.04154545 17.8655455,6.04154545 L17.8655455,6.04154545 Z" id="Fill-1" fill="#FFFFFF" mask="url(#mask-2)"></path></g></g></g></svg>'
  return (
    <div class="pinning-header">
      <div class="pinning-header-container" style={{ top: 0, position: 'relative', background: 'transparent' }}>
        <div class="main-header has-billboard menu-navigation" role="navigation">
          <Link aria-label="Netflix" class="logo icon-logoUpdate active" to="/overview"></Link>
          <ul class="tabbed-primary-navigation">
            <li class="navigation-menu"><a class="menu-trigger" role="button" aria-haspopup="true" tabindex="0">Browse</a></li>
            <li class="navigation-tab"><Link class="current active" to="/overview">Home</Link></li>
            <li class="navigation-tab"><Link to="/tv_series">TV Shows</Link></li>
            <li class="navigation-tab"><a>Movies</a></li>
            <li class="navigation-tab"><a>Latest</a></li>
            <li class="navigation-tab"><a>My List</a></li>
          </ul>
          <div class="secondary-navigation">
            <div class="nav-element">
              <div class="searchBox">
                <button class="searchTab" tabindex="0" aria-label="Search" data-uia="search-box-launcher"><span class="icon-search"></span></button>
              </div>
            </div>
            <div class="nav-element show-dvd"><a href="https://dvd.netflix.com/SubscriptionAdd?preselect=1u&amp;dsrc=STRWEB_NAV">DVD</a></div>
            <div class="nav-element"><span class="gifts" data-tooltip="gifts-tooltip"><a data-uia="action-click-gift-box" class="gifts-menu" aria-haspopup="true" aria-label="Gifts" href="/referfriends">
              <div dangerouslySetInnerHTML={{ __html: svgString }} />

            </a></span></div>
            <div class="nav-element"><span class="notifications"><button class="notifications-menu" aria-haspopup="true" aria-expanded="false" aria-label="Notifications"><span class="icon-button-notification"></span><span class="notification-pill">9+</span></button>
            </span>
            </div>
            <div class="nav-element">
              <div class="account-menu-item">
                <div class="account-dropdown-button"><a href="/YourAccount" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" aria-label="Mojgan - Account &amp; Settings"><span class="profile-link" role="presentation"><img class="profile-icon" src="https://occ-0-2418-3211.1.nflxso.net/art/62363/78d3589450d019ee1cc7d1e994eeb955a7562363.png" alt="" /></span></a><span class="caret" role="presentation"></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
