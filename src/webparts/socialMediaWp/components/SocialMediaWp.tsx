import * as React from 'react';
import styles from './SocialMediaWp.module.scss';
import { ISocialMediaWpProps } from './ISocialMediaWpProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SocialMediaWp extends React.Component<ISocialMediaWpProps, {}> {
  public render(): React.ReactElement<ISocialMediaWpProps> {
    return (
      <div className={ styles.socialMediaWp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <p className={ styles.description }>{escape(this.props.socialMediaSources)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
