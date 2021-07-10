import { kkrpg } from "./module/config.js";
import kkrpgItemSheet from "./module/sheets/kkrpgItemSheet.js";
import kkrpgNamedCharacterSheet from ".module/sheets/kkrpgNamedCharacterSheet.js";

Hooks.once("init", function() {
    console.log("kkrpg | Initialising KKRPG System");

    CONFIG.kkrpg = kkrpg;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("kkrpg", kkrpgItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("kkrpg", kkrpgNamedCharacterSheet, { makeDefault: true });
});
 