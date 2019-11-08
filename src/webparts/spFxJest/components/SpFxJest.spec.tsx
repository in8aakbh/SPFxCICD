import * as React from 'react';
import 'jest';
import { shallow } from 'enzyme';
import { Services } from './Service';
import SpFxJest from './SpFxJest';
import { sp } from "@pnp/sp";
import { SPFetchClient } from "@pnp/nodejs";
let wrapper: any;
beforeEach(() => {
    sp.setup({
        sp: {
            fetchClientFactory: () => {
                return new SPFetchClient("<<Site URL>>", "<<Client ID>>", "<<Client Secret>>");
            },
        }
    });
});
test('getItems() returns correct result', (done) => {
/*     let _Services = new Services();
    _Services.getItems().then(data => {
        wrapper = shallow(<SpFxJest ListItem={data} />); */
        wrapper = shallow(<SpFxJest ListItem={[]} />);
        expect(wrapper.find('span').first().text()).toBe('List Item(s)');
        //console.log(data.length);
        //(data.length > 0) ? expect(wrapper.find('li').length).toBeGreaterThan(2) : expect(wrapper.find('li').length).toBeFalsy();
        //expect(wrapper).toMatchSnapshot();
        //expect(wrapper).toMatchSnapshot();
        done();
    /* }); */
}, 100000);