import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {getPages, Link, safePrefix} from '../utils';

export default class Blog extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
              <div class="post-feed">
                {_.map(display_posts, (post, post_idx) => (
                <article key={post_idx} class="post">
                  <div class="post-inside">
                    {_.get(post, 'frontmatter.thumb_img_path') && 
                    <Link class="post-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                      <img class="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                    </Link>
                    }
                    <header class="post-header">
                      <h2 class="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h2>
                    </header>
                    <div class="post-content">
                      <p>{_.get(post, 'frontmatter.excerpt')}</p>
                    </div>
                    <footer class="post-meta">
                      <time class="published"
                        datetime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                    </footer>
                  </div>
                </article>
                ))}
              </div>
            </Layout>
        );
    }
}
