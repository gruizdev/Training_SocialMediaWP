import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown
} from '@microsoft/sp-webpart-base';

import * as strings from 'SocialMediaWpWebPartStrings';
import SocialMediaWp from './components/SocialMediaWp';
import { ISocialMediaWpProps } from './components/ISocialMediaWpProps';

export interface ISocialMediaWpWebPartProps {
  description: string;
  sources: string;
}


export default class SocialMediaWpWebPart extends BaseClientSideWebPart<ISocialMediaWpWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISocialMediaWpProps > = React.createElement(
      SocialMediaWp,
      {
        description: this.properties.description,
        socialMediaSources: this.properties.sources
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneDropdown('listUrl',{
                  label: strings.ListFieldLabel
                }),                
                PropertyPaneDropdown('sources', {                  
                  label: "Multi select field",
                  options: [
                    {
                      key: "EN",
                      text: "EN"
                    },
                    {
                      key: "FR",
                      text: "FR"
                    },
                    {
                      key: "NL",
                      text: "NL"
                    }
                  ]
                })

              ]
            }
          ]
        }
      ]
    };
  }
}
