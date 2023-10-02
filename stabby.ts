/*
stabby.js™ is the brainchild of SRU's Web Communications. This framework is going to revolutionize the Web industry one user at a time. stabby.js™ is one of multiple intended frameworks for the SUX™ (Surprise User eXperience™) developmental concept.
*/

function stabUser() {
    console.log('Stab!')
}

//Don't (do) use this cause document.write 'sux'!
function stabUserPage() {
    document.write('Stab!')
}

function stabFrenzy(){
    for(var i = 0; i < 100; i++){
        console.log('Stab Frenzy!')
    }
}

function miniStabFrenzy(){
    for(var i = 0; i < 50; i++){
        console.log('Mini Stab Frenzy!')
    }
}


function massiveStabFrenzy(){
    for(var i = 0; i < 200; i++){
        console.log('Massive Stab Frenzy!')
    }
}

function arbitraryStabFrenzy(amount: number){
    for(var i = 0; i < amount; i++){
        console.log('Stab Frenzy!');
    }
}

function buttonStab() {
    alert('🔪')
}

// No fun allowed. More stabbing needed.
function stabStrings(stringToBeStabbed: string) {
    return stringToBeStabbed.replace(/fun/g, '🔪')
}
