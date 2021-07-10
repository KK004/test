export default class kkrpgItemSheet extends ItemSheet { 
    
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 530,
            height: 340,
            classes: ["kkrpg", "sheet", "item"]
        });
    }
    
    get template() {
        return 'systems/kkrpg/templates/sheets/weapon-sheet.html' ; 
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.kkrpg;
        
        return data;
    }
}