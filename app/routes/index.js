import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        let response = await fetch("/api/image-items.json");
        let {data} = await response.json();

        return data.map(model => {
            let {attributes} = model;
            return {...attributes};
        });
    }
}
