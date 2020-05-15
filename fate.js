Hooks.once('init', function() {

    game.settings.register('fateroll', 'fatetext', {
        name: 'Fate Text',
        hint: 'This is the text that is displayed above the chosen players name',
        scope: 'world',
        config: true,
        default: 'Fate has spoken',
        type: String,
    });
    game.settings.register('fateroll', 'prefix', {
        name: 'Prefix',
        hint: 'This is what is inserted into the chat-message just BEFORE the players name',
        scope: 'world',
        config: true,
        default: '',
        type: String,
    });
    game.settings.register('fateroll', 'suffix', {
        name: 'Suffix',
        hint: 'This is what is inserted into the chat-message just AFTER the players name',
        scope: 'world',
        config: true,
        default: ' you have been chosen',
        type: String,
    });
    console.log("Initialised Fate-Module");
});


class Fatecontrol {

    static addChatControl() {
        const chatControlLeft = document.getElementsByClassName("roll-type-select")[0];
        let tableNode = document.getElementById("FATE-button");

        if (chatControlLeft && !tableNode) {
            const chatControlLeftNode = chatControlLeft.children[1];
			const number = 4;
            tableNode = document.createElement("label");
            tableNode.innerHTML = `<i id="FATE-button" class="fas fa-yin-yang FATE-button" style="text-shadow: 0 0 1px black;"></i>`;
            tableNode.onclick = Fatecontrol.initializeFATE;
            chatControlLeft.insertBefore(tableNode, chatControlLeftNode);
        }
    }
    static initializeFATE() {
	event.preventDefault();
	let tokens = canvas.tokens.controlled;
	let randomtoken = tokens[Math.floor(Math.random() * tokens.length)];
    console.log("TEST");
	let sHeader = game.settings.get("fateroll", "fatetext");
	let sPrefix = game.settings.get("fateroll", "prefix");
	let sSuffix = game.settings.get("fateroll", "suffix");
	
    console.log(tokens);
		let content = `
		<div style="background: black;" class="dnd5e chat-card item-card">
			<header class="card-header flexrow">
				<h3 style="text-align: center;color: gold !important;font-family: inherit;"><b>${sHeader}</b></h3>
			</header>
			</br>
			<h3 style="color:gold; margin-top: -16px;padding: 10px;text-align: center;">${sPrefix}${randomtoken.actor.name}${sSuffix}</h3>
		</div>`;
	console.log(randomtoken);
	console.log(randomtoken.actor.name);
		let rollWhisper = null;
            let rollBlind = false;
            let rollMode = game.settings.get("core", "rollMode");
            if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperIDs("GM");
            if (rollMode === "blindroll") rollBlind = true;
            ChatMessage.create({
            user: game.user._id,
            content: content,
            blind: rollBlind,
            sound: CONFIG.sounds.dice,
            flags: {
				darksheet: {
				outcome: 'table'
				}
            }
			});
    }
}

Hooks.on('canvasReady', Fatecontrol.addChatControl);