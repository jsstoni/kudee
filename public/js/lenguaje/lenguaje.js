var lenguaje = new Array();

lenguaje["text"] = [];

lenguaje["php"] = [
	[/([a-z0-9_]+(?=\())/ig, "<span style=\"color:#4B77BE\">$1</span>"],
	[/(\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b)/ig, "<span style=\"color:#26A65B\">$1</span>"],
	[/\b(class|abstract|static|public|private|extends|if|else|else if|function|for|foreach|switch|while|endfor|endforeach|endwhile|endswitch|try|catch)\b/ig, "<span style=\"color:#a71d5d\">$1</span>"],
	[/\b(false|true)\b/ig, "<span style=\"color:#22A7F0\">$1</span>"]
];

lenguaje["html"] = [
	[/<\s*[a](\s+.*?>|>).*?<\s*\/\s*[a]\s*>/ig, "$1"]
];

lenguaje["css"] = [
//hexdacimal code:
	[/((?:(\w+)?(\s*>\s*)?(#\w+\s+)?\w*(\.\w\s+)?(.?)+?\s*(\w+>\w+)?\s*\b(\:\w+(\(|\[)(#\w+|\.\w+|\w+)(\]|\)))?\s*{(\B)|}(\B))\B)/ig, "<span style=\"color:#a71d5d\">$1</span>"],
	[/((\d*\.?\d*?)(?:\s+)?(px|%|in|cm|mm|em|ex|pt|pc)\b)/ig , "<span style=\"color:#a71d5d\">$1</span>"]
];

lenguaje["python"] = [
	[/\b(from|import|def|return|print|for|while|in|try|except|if|else|pass|elif|class)\b/ig, "<span style=\"color:#a71d5d\">$1</span>"]
];

lenguaje["ruby"] = [
	[/\b(def|end|return|print|for|while|in|try|except|if|else|pass|elif|class)\b/ig, "<span style=\"color:#a71d5d\">$1</span>"]
];

lenguaje["java"] = [];

lenguaje["sql"] = [];

lenguaje["javascript"] = [
	[/([a-z0-9_]+(?=\())/ig, "<span style=\"color:#4B77BE\">$1</span>"],
	[/(\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b)/ig, "<span style=\"color:#26A65B\">$1</span>"],
	[/\b(if|else|else if|function|for|foreach|switch|while|var|log)\b/ig, "<span style=\"color:#a71d5d\">$1</span>"],
	[/\b(false|true)\b/ig, "<span style=\"color:#22A7F0\">$1</span>"]
];