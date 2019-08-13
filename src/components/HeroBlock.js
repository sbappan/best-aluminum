import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class HeroBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class="hero">
              {_.get(this.props, 'section.title') ? 
              <h2 class="hero-title">{_.get(this.props, 'section.title')}</h2>
               : 
              <h2 class="hero-title">Hi, I'm {_.get(this.props, 'pageContext.site.data.author.name')}.</h2>
              }
              <div class="hero-text">
                {markdownify(_.get(this.props, 'section.content'))}
              </div>
            </section>
        );
    }
}
