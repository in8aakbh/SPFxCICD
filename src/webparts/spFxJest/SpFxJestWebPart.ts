import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { IListItem } from './components/IListItem';
import * as strings from 'SpFxJestWebPartStrings';
import SpFxJest from './components/SpFxJest';
import { ISpFxJestProps } from './components/ISpFxJestProps';
import {Services} from './components/Service';
export interface ISpFxJestWebPartProps {
  listItem: string;
}

export default class SpFxJestWebPart extends BaseClientSideWebPart<ISpFxJestWebPartProps> {

  public render(): void {
    const _Services = new Services(); 
    _Services.getItems().then((listItem: IListItem[]): void => {
    const element: React.ReactElement<ISpFxJestProps> = React.createElement(
      SpFxJest,
      {
        ListItem: listItem
      }
    );

    ReactDom.render(element, this.domElement);
    });
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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
