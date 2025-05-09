Hooks.once('init', function() {
    game.settings.registerMenu("fateroll", "fateroll", {
        name: "Roll of Fate Customizer",
        label: "Roll of Fate Customizer",
        hint: "Roll of Fate Customizer",
        icon: "fas fa-dice-d20",
        type: ROFConfig,
        restricted: true
    });
	game.settings.register('fateroll', 'displayselected', {
        name: 'Display selected players',
        hint: 'Enable this to also post the selected players into the chat',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
 	game.settings.register('fateroll', 'onlyplayers', {
        name: 'Only Players',
        hint: 'Ignore NPCs',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
	game.settings.register('fateroll', 'usePlayerColorGradient', {
		name: 'Use Player Color Gradient',
		hint: 'If the selected token is owned by a player, use their user color as background gradient (color → black).',
		scope: 'world',
		config: true,
		default: false,
		type: Boolean,
	});	 
	game.settings.register('fateroll', 'disableMessageHeader', {
		name: 'Disable Message Header',
		hint: 'Hides the header (name, time, options button) for fate messages in chat.',
		scope: 'world',
		config: true,
		default: true,
		type: Boolean,
	});
	game.settings.register('fateroll', 'boolDisableTitle', {
        name: 'Disable Title',
        hint: 'Disables the title of the chat card.',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    }); 
	game.settings.register('fateroll', 'ROFCardHeaderGlow', {
        name: 'ROFCardHeaderGlow',
        hint: 'Header Glow',
        scope: 'world',
        config: false,
        default: false,
        type: Boolean,
    }); 
	game.settings.register('fateroll', 'ROFCardTextGlow', {
        name: 'ROFCardTextGlow',
        hint: 'Text Glow',
        scope: 'world',
        config: false,
        default: false,
        type: Boolean,
    }); 
    game.settings.register('fateroll', 'fatetext', {
        name: 'Title',
        hint: 'This is the text that is displayed above the chosen players name (you can define multiple titles if you seperate them with a ; )',
        scope: 'world',
        config: false,
        default: 'Roll of Fate;Fate has been Decided',
        type: String,
    });
    game.settings.register('fateroll', 'prefix', {
        name: 'Prefix',
        hint: 'This is what is inserted into the chat-message just BEFORE the players name (you can define multiple prefixes if you seperate them with a ; )',
        scope: 'world',
        config: false,
        default: '',
        type: String,
    });
    game.settings.register('fateroll', 'suffix', {
        name: 'Suffix',
        hint: 'This is what is inserted into the chat-message just AFTER the players name (you can define multiple suffixes if you seperate them with a ; )',
        scope: 'world',
        config: false,
        default: '...you are the lucky one;...you are chosen;is endorsed by Tymora',
        type: String,
    });
	game.settings.register('fateroll', 'titlecolor', {
        name: 'Title-Color',
        hint: 'You can change the title-color of the chat-message. You can use color-names or hex codes.',
        scope: 'world',
        config: false,
        default: '#ffea00',
        type: String,
    });
	game.settings.register('fateroll', 'textcolor', {
        name: 'Text-Color',
        hint: 'You can change the text-color of the chat-message. You can use color-names or hex codes.',
        scope: 'world',
        config: false,
        default: 'white',
        type: String,
    });

    game.settings.register('fateroll', 'backgroundcolor', {
        name: 'Background-Color',
        hint: 'You can change the background-color of the chat-message. You can use color-names or hex codes.',
        scope: 'world',
        config: false,
        default: 'black',
        type: String,
    });
	game.settings.register('fateroll', 'backgroundimg', {
		name: 'Background Image',
		hint: 'You can change the background image of the chat message. THIS WILL OVERWRITE THE BACKGROUND COLOR',
		scope: 'world',
		config: true,
		default: 'modules/fateroll/images/FateStrings.webp',
		type: String,
		filePicker: true
	});
	
	game.settings.register('fateroll', 'backgroundimg2', {
		name: 'Background Image - 2',
		hint: 'If more than 1 background is used the module will choose a background randomly.',
		scope: 'world',
		config: true,
		default: 'modules/fateroll/images/FateTower.webp',
		type: String,
		filePicker: true
	});
	
	game.settings.register('fateroll', 'backgroundimg3', {
		name: 'Background Image - 3',
		hint: 'If more than 1 background is used the module will choose a background randomly.',
		scope: 'world',
		config: true,
		default: 'modules/fateroll/images/Galaxy.webp',
		type: String,
		filePicker: true
	});
	game.settings.register('fateroll', 'backgroundimg4', {
		name: 'Background Image - 4',
		hint: 'If more than 1 background is used the module will choose a background randomly.',
		scope: 'world',
		config: true,
		default: '',
		type: String,
		filePicker: true
	});
	game.settings.register('fateroll', 'backgroundimg5', {
		name: 'Background Image - 5',
		hint: 'If more than 1 background is used the module will choose a background randomly.',
		scope: 'world',
		config: true,
		default: '',
		type: String,
		filePicker: true
	});
    game.settings.register('fateroll', 'backgroundstyle', {
        name: 'Background Style',
        hint: 'Choose a Style for your background',
        scope: 'world',
        config: false,
        default: 'cover',
        type: String,
    });
	game.settings.register('fateroll', 'soundpath', {
        name: 'Custom Sound',
        hint: 'You can change the background-image of the chat-message. Put in an url or a path that ends with .wav / .mp3',
        scope: 'world',
        config: true,
        default: 'sounds/dice.wav',
        type: String,
		filePicker: true
    }); 
	game.settings.register('fateroll', 'hidebutton', {
        name: 'Hide-Button for non-GMs',
        hint: 'Check this if you dont want your players to see the button',
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
    });
	game.settings.register('fateroll', 'dropshadow', {
        name: 'Dropshadow',
        hint: 'Check this if you want to enable the drop shadow',
        scope: 'world',
        config: false,
        default: true,
        type: Boolean,
    }); 
	game.settings.register('fateroll', 'titleBlend', {
        name: 'titleBlend',
        hint: 'blending of the title is saved here',
        scope: 'world',
        config: false,
        default: 'hard-light',
        type: String,
    });
	game.settings.register('fateroll', 'titleBackStyle', {
        name: 'titleBackStyle',
        hint: 'titleBackStyle is saved here',
        scope: 'world',
        config: false,
        default: 'Dark',
        type: String,
    });
	game.settings.register('fateroll', 'titleBackFilter', {
        name: 'titleBackFilter',
        hint: 'titleBackFilter is saved here',
        scope: 'world',
        config: false,
        default: 'Darkness (Strong)',
        type: String,
    });
	game.settings.register('fateroll', 'textBlend', {
        name: 'textBlend',
        hint: 'blending of the text is saved here',
        scope: 'world',
        config: false,
        default: 'hard-light',
        type: String,
    });
	game.settings.register('fateroll', 'textBackStyle', {
        name: 'textBackStyle',
        hint: 'textBackStyle is saved here',
        scope: 'world',
        config: false,
        default: 'Dark',
        type: String,
    });
	game.settings.register('fateroll', 'textBackFilter', {
        name: 'textBackFilter',
        hint: 'textBackFilter is saved here',
        scope: 'world',
        config: false,
        default: 'Darkness (Strong)',
        type: String,
    });
	game.settings.register('fateroll', 'useSequencerEffects', {
		name: 'Use Sequencer Effects',
		hint: 'Plays a visual effect on the selected token if Sequencer is installed.',
		scope: 'world',
		config: true,
		default: false,
		type: Boolean
	});
    console.log("Initialised Roll-Of-Fate-Module");
	
});

Hooks.on("renderChatMessage", (message, html, data) => {
	if (!game.modules.get("sequencer")?.active) return;
	// Player Color Gradient + Sequencer Glow
	if (game.settings.get('fateroll', 'usePlayerColorGradient')) {
		const div = html[0].querySelector('.roll-of-fate');
		const msgEl = html[0].closest('.message');
		const tokenId = div?.querySelector('.rof-token-link')?.dataset?.tokenId;
		const token = canvas.tokens.get(tokenId);
		const actor = token?.actor;

		if (actor) {
			const user = game.users.find(u => u.character?.id === actor.id && u.active);
			if (user && msgEl) {
				const color = user.color || "#ffaa00";
				msgEl.style.setProperty('--rof-user-color', color);
				msgEl.style.setProperty("background", `linear-gradient(90deg, ${color}, black)`);

				if (typeof Sequencer !== "undefined" && token) {
					new Sequence()
						.effect()
						.atLocation(token)
						.attachTo(token)
						.persist()
						.name("fateroll-glow")
						.filter("Glow", {
							color,
							distance: 10,
							outerStrength: 5,
							innerStrength: 0,
							quality: 0.5
						})
						.scaleIn(0, 500, { ease: "easeOutCubic" })
						.fadeOut(500)
						.duration(2000)
						.play();
				}
			}
		}
	}
});

Hooks.on("renderChatMessage", (message, html, data) => {
	if (game.settings.get('fateroll', 'disableMessageHeader') && html[0].querySelector('.roll-of-fate')) {
		html[0].querySelector('.message-header')?.style.setProperty("display", "none");
	}
	html[0].querySelectorAll(".rof-token-link").forEach(el => {
		el.addEventListener("click", ev => {
			const tokenId = ev.currentTarget.dataset.tokenId;
			const token = canvas.tokens.get(tokenId);
			if (token) canvas.animatePan({ x: token.x, y: token.y, scale: 1.5 });
		});
	});

	if (game.settings.get('fateroll', 'usePlayerColorGradient')) {
		const div = html[0].querySelector('.roll-of-fate');
		const msgEl = html[0].closest('.message');
		const tokenId = div?.querySelector('.rof-token-link')?.dataset?.tokenId;
		const token = canvas.tokens.get(tokenId);
		const actor = token?.actor;
		console.log(actor);
		if (actor) {
			const user = game.users.find(u => u.character?.id === actor.id && u.active);
			if (user && msgEl) {
				msgEl.style.setProperty('--rof-user-color', user.color);
			}
		}
	}
});
class Fatecontrol {

	static addChatControl() {
		const rollPrivacy = document.getElementById("roll-privacy");
		if (rollPrivacy && !document.getElementById("FATE-button-privacy")) {
			const newButton = document.createElement("button");
			newButton.setAttribute("id", "FATE-button-privacy");
			newButton.setAttribute("type", "button");
			newButton.setAttribute("aria-label", "Fate Roll");
			newButton.setAttribute("data-tooltip", "Fate Roll");
			newButton.classList.add("ui-control", "icon");
		
			const icon = document.createElement("i");
			icon.classList.add("fa-solid", "fa-yin-yang");
			newButton.appendChild(icon);
		
			newButton.onclick = Fatecontrol.initializeFATE;
			rollPrivacy.insertBefore(newButton, rollPrivacy.firstChild);
		}
	}
	
	
    static initializeFATE() {
		event.preventDefault();
		let tokens = canvas.tokens.controlled;
		if(game.settings.get('fateroll', 'onlyplayers'))
		{
			let tempArray = []
			for(let i = 0; i < tokens.length; i++){
				
				if(tokens[i].actor.data.type != "npc"){
					tempArray.push(tokens[i])
				}
			}
			tokens = tempArray;
		}
		
		let randomtoken = tokens[Math.floor(Math.random() * tokens.length)];
		
		let headersArray = game.settings.get("fateroll", "fatetext").split(";");
		let sHeader = headersArray[Math.floor(Math.random() * headersArray.length)];
		
		let prefixArray = game.settings.get("fateroll", "prefix").split(";");
		let sPrefix = prefixArray[Math.floor(Math.random() * prefixArray.length)];
		
	    let suffixArray = game.settings.get("fateroll", "suffix").split(";");
		let sSuffix = suffixArray[Math.floor(Math.random() * suffixArray.length)];
		
		let sBackgroundColor = game.settings.get("fateroll", "backgroundcolor");
		let sTitleColor = game.settings.get("fateroll", "titlecolor");
		let sTextColor = game.settings.get("fateroll", "textcolor");
		let sBackgroundstyle =  game.settings.get("fateroll", "backgroundstyle");
		
		let boolDisableTitle = game.settings.get("fateroll","boolDisableTitle");
		let boolCardDS = game.settings.get('fateroll', 'dropshadow');
		
		let customstyle = ""
		if(boolCardDS){
			customstyle += 'box-shadow: 0 7px 10px;';
		}
		let sBoolDisableTitle;
		if(boolDisableTitle){
			sBoolDisableTitle = "none";
		}
		else{
			sBoolDisableTitle = "block";
		}
		let vTitleGlow = 0;
		let vTextGlow = 0;
		
		if(game.settings.get("fateroll", "ROFCardHeaderGlow")){
			vTitleGlow = 5;
		}
		if(game.settings.get("fateroll", "ROFCardTextGlow")){
			vTextGlow = 5;
		}
		
		let backgroundArray = [];
		
		if(game.settings.get("fateroll", "backgroundimg") != ""){
			backgroundArray.push(game.settings.get("fateroll", "backgroundimg"));
		}
		if(game.settings.get("fateroll", "backgroundimg2") != ""){
			backgroundArray.push(game.settings.get("fateroll", "backgroundimg2"));
		}
		if(game.settings.get("fateroll", "backgroundimg3") != ""){
			backgroundArray.push(game.settings.get("fateroll", "backgroundimg3"));
		}
		if(game.settings.get("fateroll", "backgroundimg4") != ""){
			backgroundArray.push(game.settings.get("fateroll", "backgroundimg4"));
		}
		if(game.settings.get("fateroll", "backgroundimg5") != ""){
			backgroundArray.push(game.settings.get("fateroll", "backgroundimg5"));
		}
		
		let sBackgroundImg = backgroundArray[Math.floor(Math.random() * backgroundArray.length)];
		let sTitleBlend = game.settings.get('fateroll', 'titleBlend')
		let sTitleBackStyle =  game.settings.get('fateroll', 'titleBackStyle');
		let sTitleBackFilter = game.settings.get('fateroll', 'titleBackFilter');
		let sTextBlend = game.settings.get('fateroll', 'textBlend')
		let sTextBackStyle =  game.settings.get('fateroll', 'textBackStyle');
		let sTextBackFilter = game.settings.get('fateroll', 'textBackFilter');
		let sSoundPath = game.settings.get("fateroll", "soundpath");
		
		let selectedstring = "";
		
		for(let i = 0; i < tokens.length ; i++) {
			if(i != (tokens.length -1)){
			selectedstring = selectedstring + "<label class='ROFtokenname'>" + tokens[i].name +",</label>";
			}
			else{
			selectedstring = selectedstring + "<label class='ROFtokenname'>" + tokens[i].name +"</label>";
			}
		}
		
		let blind;
		let whisper;
		
		let header = `<header class="rof-card-header" style="display:${sBoolDisableTitle}; mix-blend-mode:${sTitleBlend}; background: ${sTitleBackStyle}; backdrop-filter: ${sTitleBackFilter};">
						<h3 class="rof-cardtitle" style="text-align: center;color: ${sTitleColor} !important;font-family: inherit; text-shadow: 0 0 ${vTitleGlow}px;"><b>${sHeader}</b></h3>
					  </header>`
		if(sHeader == "")
			header="";
		
		if(selectedstring == "" || !game.settings.get("fateroll", "displayselected"))
			selectedstring="";
		else{
			selectedstring='<div class="faterollSelectedStrong" style="color:'+sTextColor+'">'+selectedstring+'</div>';
		}
		
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
			//console.log(tokens);
				let content = `
				${selectedstring}
				<div style="background: ${sBackgroundColor}; background-image: url(${sBackgroundImg}); background-size: ${sBackgroundstyle};${customstyle}" class="roll-of-fate">
					${header}	
					<h3 class="rof-cardtext" style="color:${sTextColor};padding: 10px;text-align: center;text-shadow: 0 0 ${vTextGlow}px ; mix-blend-mode:${sTextBlend}; background: ${sTextBackStyle}; backdrop-filter: ${sTextBackFilter};">
						${sPrefix} 
						<a class="rof-token-link" data-token-id="${randomtoken.id}" style="cursor: pointer; font-weight: bold; color: ${sTextColor}; text-decoration: underline;">${randomtoken.name}</a> 
						${sSuffix}
					</h3>
				</div>
				`;
			ChatMessage.create({
				user: game.user._id,
				content: content,
				whisper: whisper,
				blind: blind,
				sound: sSoundPath,
				flags: {
					fateroll: {
					fateroll: 'fate'
					}
				}
			});
		}
	}
}
class ROFConfig extends FormApplication {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            title: "Roll of Fate Customizer",
            id: "rof-config",
            template: "modules/fateroll/templates/rofEditor.html",
            width: 500,
            height: 700,
            closeOnSubmit: true
        })
    }
	async _updateObject(event, formData) {
		console.log("Saved");
		let TitleColor = document.getElementById("ROFTitleC").value;
		let TextColor = document.getElementById("ROFTextC").value;
		let BackgroundColor = document.getElementById("ROFBackC").value;
		let BackgroundStyle = document.getElementById("ROFbgstyle").value;
		
		let sFateText = document.getElementById("ROFTitlelist").value;
		sFateText = sFateText.replace(/(?:\r\n|\r|\n)/g, ';');
		
		let sPrefix = document.getElementById("ROFPrefixList").value;
		sPrefix = sPrefix.replace(/(?:\r\n|\r|\n)/g, ';');
		
		let sSuffix = document.getElementById("ROFSuffixList").value;
		sSuffix = sSuffix.replace(/(?:\r\n|\r|\n)/g, ';');
		
		let fatetext = sFateText;
		let prefix = sPrefix;
		let suffix = sSuffix;
		
		game.settings.set('fateroll', 'dropshadow', document.getElementById("ROFCardDS").checked);
		game.settings.set('fateroll', 'titlecolor', TitleColor);
		game.settings.set('fateroll', 'titleBlend', document.getElementById("ROFTitleBlend").value);
		game.settings.set('fateroll', 'titleBackStyle', document.getElementById("TitleBackStyle").value);
		game.settings.set('fateroll', 'titleBackFilter', document.getElementById("TitleBackFilter").value);
		
		game.settings.set('fateroll', 'textcolor', TextColor);
		game.settings.set('fateroll', 'textBlend', document.getElementById("ROFTextBlend").value);
		game.settings.set('fateroll', 'textBackStyle', document.getElementById("TextBackStyle").value);
		game.settings.set('fateroll', 'textBackFilter', document.getElementById("TextBackFilter").value);
		
		game.settings.set('fateroll', 'backgroundcolor', BackgroundColor);
		game.settings.set('fateroll', 'backgroundstyle', BackgroundStyle);
			
		game.settings.set('fateroll', 'ROFCardHeaderGlow', document.getElementById("ROFTitleGlow").checked);
		game.settings.set('fateroll', 'ROFCardTextGlow', document.getElementById("ROFTextGlow").checked);
		if(fatetext.endsWith(";")){
			fatetext = fatetext.slice(0, -1);
		}
		if(prefix.endsWith(";")){
			prefix = prefix.slice(0, -1);
		}
		if(suffix.endsWith(";")){
			suffix = suffix.slice(0, -1);
		}
		game.settings.set('fateroll', 'fatetext', fatetext);
		game.settings.set('fateroll', 'prefix', prefix);
		game.settings.set('fateroll', 'suffix', suffix);
        ui.notifications.info("ROF-Saved");
    }
	close(options){
        super.close(options);
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

Hooks.on('renderROFConfig', function(){
	//GET VALUES FROM SETTINGS
	document.getElementById("ROFCardDS").checked = game.settings.get('fateroll', 'dropshadow');
	document.getElementById("ROFTitleC").value = game.settings.get('fateroll', 'titlecolor');
	document.getElementById("ROFTitleBlend").value = game.settings.get('fateroll', 'titleBlend');
	document.getElementById("TitleBackStyle").value = game.settings.get('fateroll', 'titleBackStyle') ;
	document.getElementById("TitleBackFilter").value = game.settings.get('fateroll', 'titleBackFilter');
	
		document.getElementById("cardpreview").style.mixBlendMode = document.getElementById("ROFTitleBlend").value;
		document.getElementById("cardpreview").style.background = document.getElementById("TitleBackStyle").value;
		document.getElementById("cardpreview").style.backdropFilter = document.getElementById("TitleBackFilter").value;
	
	document.getElementById("ROFTextBlend").value = game.settings.get('fateroll', 'textBlend');
	document.getElementById("TextBackStyle").value = game.settings.get('fateroll', 'textBackStyle') ;
	document.getElementById("TextBackFilter").value = game.settings.get('fateroll', 'textBackFilter');
	
		document.getElementById("textpreview").style.mixBlendMode = document.getElementById("ROFTextBlend").value;
		document.getElementById("textpreview").style.background = document.getElementById("TextBackStyle").value;
		document.getElementById("textpreview").style.backdropFilter = document.getElementById("TextBackFilter").value;

	document.getElementById("headerpreview").style.color = game.settings.get('fateroll', 'titlecolor');
	
	document.getElementById("ROFTextC").value = game.settings.get('fateroll', 'textcolor');
	document.getElementById("textpreview").style.color = game.settings.get('fateroll', 'textcolor');

	document.getElementById("ROFBackC").value = game.settings.get('fateroll', 'backgroundcolor');
	document.getElementById("messagepreview").style.background = game.settings.get('fateroll', 'backgroundcolor');
	
	let sFateText = game.settings.get("fateroll", "fatetext");
	sFateText = sFateText.replace(/;/g, "\n");
    let sROFPrefixList = game.settings.get("fateroll", "prefix");
	sROFPrefixList = sROFPrefixList.replace(/;/g, "\n");
	let sROFSuffixList = game.settings.get("fateroll", "suffix");
	sROFSuffixList = sROFSuffixList.replace(/;/g, "\n");
	
	
	document.getElementById("ROFTitlelist").value = sFateText;
	
	document.getElementById("ROFPrefixList").value = sROFPrefixList;
	
	document.getElementById("ROFSuffixList").value = sROFSuffixList;
	
	//let backgroundArray = [];
		
	if(game.settings.get("fateroll", "backgroundimg") != ""){
		//backgroundArray.push(game.settings.get("fateroll", "backgroundimg"));
		document.getElementById("ROFBG1").style.display = "unset";
	}
	if(game.settings.get("fateroll", "backgroundimg2") != ""){
		//backgroundArray.push(game.settings.get("fateroll", "backgroundimg2"));
		document.getElementById("ROFBG2").style.display = "unset";
	}
	if(game.settings.get("fateroll", "backgroundimg3") != ""){
		//backgroundArray.push(game.settings.get("fateroll", "backgroundimg3"));
		document.getElementById("ROFBG3").style.display = "unset";
	}
	
	//document.getElementById("ROFBackgroundList").value = game.settings.get("fateroll", "backgroundimg")+"\n" + game.settings.get("fateroll", "backgroundimg2") + "\n" + game.settings.get("fateroll", "backgroundimg3");
	let Background = "url('"+game.settings.get("fateroll", "backgroundimg")+"')"
	document.getElementById("messagepreview").style.background = Background;
	document.getElementById("ROFbgstyle").value = game.settings.get("fateroll", "backgroundstyle");
	document.getElementById("messagepreview").style.backgroundSize = document.getElementById("ROFbgstyle").value;
	
	document.getElementById("ROFTitleGlow").checked = game.settings.get('fateroll', 'ROFCardHeaderGlow');
	document.getElementById("ROFTextGlow").checked = game.settings.get('fateroll', 'ROFCardTextGlow');
	
	if(document.getElementById("ROFCardDS").checked){
		document.getElementById("messagepreview").style.boxShadow = "0 7px 10px";
	}
	if(document.getElementById("ROFTitleGlow").checked){
		document.getElementById("headerpreview").style.textShadow = "0px 0px 5px";
	}
	else{
		document.getElementById("headerpreview").style.textShadow = "0px 0px 0px";
	}
	if(document.getElementById("ROFTextGlow").checked){
		document.getElementById("textpreview").style.textShadow = "0px 0px 5px";
	}
	else{
		document.getElementById("textpreview").style.textShadow = "0px 0px 0px";
	}
	
	if(game.settings.get("fateroll","boolDisableTitle")){
		document.getElementById("cardpreview").style.display = "none";
		document.getElementById("ROFPrevCard").style.marginTop = "46px";
	}
	
	document.getElementById("ROFTitleCP").value = document.getElementById("ROFTitleC").value;
	document.getElementById("ROFTextCP").value = document.getElementById("ROFTextC").value;
	document.getElementById("ROFBackCP").value = document.getElementById("ROFBackC").value;
});