const Alexa = require('alexa-sdk');

exports.handler = function(event,context,callback){
	const alexa = Alexa.handler(event,context,callback);
	alexa.appId = APP_ID //  skill id in developer
	alexa.registerHandlers(handlers);
	alexa.execute();
}

const handlers={
	'LaunchRequest' : function() { //alexa open Quran 
		this.emit(':ask', 'What Surah or episode would you like to play?', 'What episode?');
	},
	'AudioPlayer.PlaybackStarted' : function() {
    	console.log('Alexa begins playing the audio stream');
    },
    'AudioPlayer.PlaybackFinished' : function() {
    	console.log('The stream comes to an end');
    },
    'AudioPlayer.PlaybackStopped' : function() {
    	console.log('Alexa stops playing the audio stream');
    },
    'AudioPlayer.PlaybackNearlyFinished' : function() {
    	console.log('The currently playing stream is nearly complate and the device is ready to receive a new stream');
    },
    'AudioPlayer.PlaybackFailed' : function() {
    	console.log('Alexa encounters an error when attempting to play a stream');
    },
	'HelloWorldIntent' : function(){
		this.emit(':tell', 'Hello World!');
	},
	'PlaybackController.NextCommandIssued' : function() {
        //Your skill can respond to NextCommandIssued with any AudioPlayer directive.
    },
    'PlaybackController.PauseCommandIssued' : function() {
        //Your skill can respond to PauseCommandIssued with any AudioPlayer directive.
    },
    'PlaybackController.PlayCommandIssued' : function() {
        //Your skill can respond to PlayCommandIssued with any AudioPlayer directive.
    },
    'PlaybackController.PreviousCommandIssued' : function() {
        //Your skill can respond to PreviousCommandIssued with any AudioPlayer directive.
    },
    'System.ExceptionEncountered' : function() {
        //Your skill cannot return a response to System.ExceptionEncountered.
    },
	'Episode1Intent' : function(){ //if user says hellow, Alexa echos "here is.."
		var audio0 = '<audio src="https://s3.amazonaws.com/audio0.mp3" />';
		this.emit(':ask', 'Here is Surah Al-Fatiha. $(audio0)', 'How was that?');
	},
	'Unhandled' : function(){
		this.emit(':tell', 'Sorry, I dont understand.');
	}
};