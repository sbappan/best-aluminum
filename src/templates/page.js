import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <article class="post page post-full">
                <header class="post-header">
                  <h1 class="post-title underline">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                </header>
                {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                <div class="post-subtitle">
                  {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                </div>
                }
                {_.get(this.props, 'pageContext.frontmatter.img_path') && 
                <div class="post-thumbnail">
                  <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
                </div>
                }
                <div class="post-content">
                  {htmlToReact(_.get(this.props, 'pageContext.html'))}
                </div>
              </article>
            </Layout>
        );
    }
}
