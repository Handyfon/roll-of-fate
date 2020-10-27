Hooks.once('init', function() {

	game.settings.register('fateroll', 'displayselected', {
        name: 'Display selected players',
        hint: 'Enable this to also post the selected players into the chat',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    }); 
    game.settings.register('fateroll', 'fatetext', {
        name: 'Title',
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
	game.settings.register('fateroll', 'titlecolor', {
        name: 'Title-Color',
        hint: 'You can change the title-color of the chat-message. You can use color-names or hex codes.',
        scope: 'world',
        config: true,
        default: 'gold',
        type: String,
    });
	game.settings.register('fateroll', 'textcolor', {
        name: 'Text-Color',
        hint: 'You can change the text-color of the chat-message. You can use color-names or hex codes.',
        scope: 'world',
        config: true,
        default: 'gold',
        type: String,
    });
	game.settings.register('fateroll', 'textbackgroundcolor', {
        name: 'Text-Background-Color',
        hint: 'You can change the color of the text-background. You can use color-names or hex codes.',
        scope: 'world',
        config: true,
        default: '#00000091',
        type: String,
    });
    game.settings.register('fateroll', 'backgroundcolor', {
        name: 'Background-Color',
        hint: 'You can change the background-color of the chat-message. You can use color-names or hex codes.',
        scope: 'world',
        config: true,
        default: 'black',
        type: String,
    });
    game.settings.register('fateroll', 'backgroundimg', {
        name: 'Background-Image',
        hint: 'You can change the background-imgae of the chat-message. Put in an url. THIS WILL OVERWRITE THE BACKGROUND COLOR',
        scope: 'world',
        config: true,
        default: '',
        type: String,
    });
	game.settings.register('fateroll', 'soundpath', {
        name: 'Custom Sound',
        hint: 'You can change the background-imgae of the chat-message. Put in an url or a path that ends with .wav / .mp3',
        scope: 'world',
        config: true,
        default: 'sounds/dice.wav',
        type: String,
    }); 
	game.settings.register('fateroll', 'hidebutton', {
        name: 'Hide-Button for non-GMs',
        hint: 'Check this if you dont want your players to see the button',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    }); 
    console.log("Initialised Roll-Of-Fate-Module");
});


class Fatecontrol {

    static addChatControl() {
        const chatControlLeft = document.getElementsByClassName("chat-control-icon")[0];
        let tableNode = document.getElementById("FATE-button");

        if (chatControlLeft && !tableNode) {
            const chatControlLeftNode = chatControlLeft.firstElementChild;
			const number = 4;
            tableNode = document.createElement("label");
            tableNode.innerHTML = `<i id="FATE-button" class="fas fa-yin-yang FATE-button" style="text-shadow: 0 0 1px black;margin-right: 5px;"></i>`;
            tableNode.onclick = Fatecontrol.initializeFATE;
            chatControlLeft.insertBefore(tableNode, chatControlLeftNode);
        }
    }
    static initializeFATE() {
		event.preventDefault();
		let tokens = canvas.tokens.controlled;
		let randomtoken = tokens[Math.floor(Math.random() * tokens.length)];
		let sHeader = game.settings.get("fateroll", "fatetext");
		let sPrefix = game.settings.get("fateroll", "prefix");
		let sSuffix = game.settings.get("fateroll", "suffix");
		let sBackgroundColor = game.settings.get("fateroll", "backgroundcolor");
		let sTitleColor = game.settings.get("fateroll", "titlecolor");
		let sTextColor = game.settings.get("fateroll", "textcolor");
		let sTextBackgroundColor = game.settings.get("fateroll", "textbackgroundcolor");
		let sBackgroundImg = game.settings.get("fateroll", "backgroundimg");
		let sSoundPath = game.settings.get("fateroll", "soundpath");
		
		let selectedstring = "";
		
		for(let i = 0; i < tokens.length ; i++) {
			if(i != (tokens.length -1)){
			selectedstring = selectedstring + tokens[i].data.name +", ";
			}
			else{
			selectedstring = selectedstring + tokens[i].data.name;
			}
		}
		
		let blind;
		let whisper;
		
		let rollMode;
		  rollMode = rollMode || game.settings.get("core", "rollMode");
		  if ( ["gmroll", "blindroll"].includes(rollMode) ) whisper = ChatMessage.getWhisperRecipients("GM");
		  if ( rollMode === "blindroll" ) blind = true;
		  if ( rollMode === "selfroll" ) whisper = [game.user.id];
		
		if(tokens.length === 1){
			ui.notifications.notify("ROLL OF FATE: You only selected one token...");
		}
		
		if(tokens.length === 0){
			ui.notifications.warn("ROLL OF FATE: You need to select some tokens first...");
			console.log("Roll of Fate | No tokens selected");
		}
		else{
			console.log(tokens);
				let content = `
				<div style="background: ${sBackgroundColor}; background-image: url(${sBackgroundImg});" class="dnd5e chat-card item-card">
					<header class="card-header flexrow">
						<h3 style="text-align: center;color: ${sTitleColor} !important;font-family: inherit; text-shadow: 0 0 5px ${sTextBackgroundColor};"><b>${sHeader}</b></h3>
					</header>
					</br>
					<h3 style="color:${sTextColor}; margin-top: -16px;padding: 10px;text-align: center;text-shadow: 0 0 5px ${sTextBackgroundColor};">${sPrefix}${randomtoken.data.name}${sSuffix}</h3>
				</div>`;
				let contentWithUsers = `
				<div style="background: ${sBackgroundColor}; background-image: url(${sBackgroundImg});" class="dnd5e chat-card item-card">
					<p style="color:${sTextColor}">${selectedstring}</p>
					<header class="card-header flexrow">
						<h3 style="text-align: center;color: ${sTitleColor} !important;font-family: inherit; text-shadow: 0 0 5px ${sTextBackgroundColor};"><b>${sHeader}</b></h3>
					</header>
					</br>
					<h3 style="color:${sTextColor}; margin-top: -16px;padding: 10px;text-align: center;text-shadow: 0 0 5px ${sTextBackgroundColor};">${sPrefix}${randomtoken.data.name}${sSuffix}</h3>
				</div>`;
				
			if(game.settings.get("fateroll", "displayselected")){
					ChatMessage.create({
					user: game.user._id,
					content: contentWithUsers,
					whisper: whisper,
					blind: blind,
					sound: sSoundPath,
					flags: {
						darksheet: {
						outcome: 'table'
						}
					}
					});
			}
			else
			{
					ChatMessage.create({
					user: game.user._id,
					content: content,
					whisper: whisper,
					blind: blind,
					sound: sSoundPath,
					flags: {
						darksheet: {
						outcome: 'table'
						}
					}
					});
			}
		}
	}
}
Hooks.on('canvasReady', function(){
	if(game.settings.get('fateroll', 'hidebutton')){
		if(game.user.isGM){
			Fatecontrol.addChatControl();
			console.log("FATE GM TRUE");
		}
		console.log("FATE GM FIN");
	}
	else{
	Fatecontrol.addChatControl();
	console.log("FATE NOT SET");
	}
 
});