
import {
    IPropertyPaneField,
    PropertyPaneFieldType
} from '@microsoft/sp-webpart-base';

import {IPropertyPaneMultiSelectDropdownProps} from './IPropertyPaneMultiSelectDropdownProps';

export class PropertyPaneMultiSelectDropdown implements IPropertyPaneField<IPropertyPaneMultiSelectDropdownProps>{
    public type: PropertyPaneFieldType;    
    public targetProperty: string;
    public shouldFocus?: boolean;
    public properties: IPropertyPaneMultiSelectDropdownProps;


}