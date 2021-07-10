export default class kkrpgNamedCharacterSheet extends ActorSheet {
    static get defaultOption() {
        return mergObject(super.defaultOptions, {
            template: "systems/kkrpg/templates/sheets/namedCharacter-sheet.hbs",
            classes: ["kkrpg", "sheet", "namedCharacter"]
        });
    }
}