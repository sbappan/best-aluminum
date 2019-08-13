import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify, Link} from '../utils';

export default class ContentBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class="block">
              <h2 class="block-title underline">{_.get(this.props, 'section.title')}</h2>
              {_.get(this.props, 'section.image') && 
              <div class="block-thumbnail">
                <img src={safePrefix(_.get(this.props, 'section.image'))} alt={_.get(this.props, 'section.title')} />
              </div>
              }
              <div class="block-content">
                {markdownify(_.get(this.props, 'section.content'))}
                {_.get(this.props, 'section.actions') && 
                <p class="block-cta">
                  {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                  <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} class="button">{_.get(action, 'label')}</Link>
                  ))}
                </p>
                }
              </div>
            </section>
        );
    }
}
