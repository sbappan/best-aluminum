import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';
import Social from './Social';

export default class Header extends React.Component {
    render() {
        return (
            <header id="masthead" class={'site-header ' + _.get(this.props, 'pageContext.site.siteMetadata.header.bg')}>
              <div class="site-header-wrap">
                <div class="site-header-inside">
                  <div class="site-branding">
                    {_.get(this.props, 'pageContext.site.siteMetadata.header.profile_img') && 
                    <p class="profile">
                      <Link to={safePrefix('/')}><img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.profile_img'))}
                          class="avatar" alt="Author Avatar" /></Link>
                    </p>
                    }
                    <div class="site-identity">
                      {((_.get(this.props, 'pageContext.frontmatter.template') === 'home') || (_.get(this.props, 'pageContext.frontmatter.template') === 'blog')) ? 
                      <h1 class="site-title"><Link to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</Link></h1>
                       : 
                      <p class="site-title"><Link to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</Link></p>
                      }
                      {_.get(this.props, 'pageContext.site.siteMetadata.header.tagline') && 
                      <p class="site-description">{_.get(this.props, 'pageContext.site.siteMetadata.header.tagline')}</p>
                      }
                    </div>
                    {(_.get(this.props, 'pageContext.menus.main') && _.get(this.props, 'pageContext.site.siteMetadata.header.has_nav')) && 
                    <button id="menu-toggle" class="menu-toggle"><span class="screen-reader-text">Menu</span><span class="icon-menu"
                        aria-hidden="true" /></button>
                    }
                  </div>
                  {(_.get(this.props, 'pageContext.menus.main') && _.get(this.props, 'pageContext.site.siteMetadata.header.has_nav')) && 
                  <nav id="main-navigation" class="site-navigation" aria-label="Main Navigation">
                    <div class="site-nav-wrap">
                      <div class="site-nav-inside">
                        <ul class="menu">
                          {_.map(_.get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                          <li key={item_idx} class={'menu-item ' + ((_.get(this.props, 'pageContext.url') === _.get(item, 'url')) ? ' current-menu-item' : '')}>
                            <Link to={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</Link>
                          </li>
                          ))}
                        </ul>
                        {_.get(this.props, 'pageContext.site.siteMetadata.header.has_social') && 
                        <Social {...this.props} />
                        }
                      </div>
                    </div>
                  </nav>
                  }
                </div>
              </div>
            </header>
        );
    }
}
