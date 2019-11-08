import { IListItem } from './IListItem';
import { sp, Items, spODataEntityArray } from "@pnp/sp";


export class Services {
    public getItems(): Promise<IListItem[]> {
        return new Promise<IListItem[]>((resolve, reject) => {
          
            sp.web.lists.getByTitle("Site Pages").items.select("Id", "Title").get(spODataEntityArray<Items, IListItem>(Items)).then(items => {
                resolve(items);
            }).catch(error => reject(error));
        });
    }
}
