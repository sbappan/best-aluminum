import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {getPages, Link, safePrefix} from '../utils';

export default class PostsBlock extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        let recent_posts = display_posts.slice(0, _.get(this.props, 'section.num_posts_displayed'));
        return (
            <section id={_.get(this.props, 'section.section_id')} class="block">
              <h2 class="block-title underline">{_.get(this.props, 'section.title')}</h2>
              <div class="post-feed">
                {_.map(recent_posts, (post, post_idx) => (
                <article key={post_idx} class="post">
                  <div class="post-inside">
                    {_.get(post, 'frontmatter.thumb_img_path') && 
                    <Link class="post-thumbnail" to={safePrefix(_.get(post, 'url'))}><img class="thumbnail"
                        src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} /></Link>
                    }
                    <header class="post-header">
                      <h3 class="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h3>
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
              {_.get(this.props, 'section.actions') && 
              <p class="block-cta">
                {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} class="button">{_.get(action, 'label')}</Link>
                ))}
              </p>
              }
            </section>
        );
    }
}
