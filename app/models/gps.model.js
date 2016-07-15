'use strict';

var mongoose     = require('mongoose'),
	Schema       = mongoose.Schema;

var gpsSchema = new Schema({
	device: {
		type: String,
		ref: 'Device',
		trim: true
	},
	mock_id: {
		type: String
	},
	timestamp: {
		type: Date,
	},
	speed: {
		type: Number
	},
	coordinates: {
		lat: {
			type: Number
		},
		lng: {
			type: Number
		}
	},
	lat_dir: {
		type: String
	},
	lng_dir: {
		type: String
	},
	altitude: {
		type: Number,
		trim: true
	},
	address: {
		country: {
			type: String
		},
		city: {
			type: String
		},
		baranggay: {
			type: String
		},
		street: {
			type: String
		},
		postal_code: {
			type: String
		}
	},
	weather: {
		temperature: {
			type: Number
		},
		humidity: {
			type: Number
		},
		windSpeed: {
			type: Number
		},
		summary: {
			type: String
		},
		precip_intensity: {
			type: String
		}
	}
});

// gpsSchema.index({name: 1, user_id: 1}, {unique: true});

mongoose.model('Gps', gpsSchema, 'ccdGps');