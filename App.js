import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Swiper from 'react-native-swiper';

import Board from './screens/Board';

const boards = [
	{
		imageSource: require('./assets/images/screen-one.png'),
		boardTitle: 'Improve body balance',
		description:
			'Exercise can improve your stability and also what is called your “kinesthetic awareness”.'
	},
	{
		imageSource: require('./assets/images/screen-two.png'),
		boardTitle: 'Stop wishing and get fit',
		description:
			'Regardless of your body appearance, regular fitness helps improve your self-esteem.'
	},
	{
		imageSource: require('./assets/images/screen-three.png'),
		boardTitle: 'Relieve stress with yoga',
		description:
			'Yoga reduces stress and anxiety, which in turn reduces the physical effects of stress on the body. '
	}
];

export default class App extends React.Component {
	render() {
		const boardList = boards.map((board, index) => (
			<Board {...board} key={index} />
		));
		return (
			<View style={styles.container}>
				<View style={styles.boardsContainer}>
					<Swiper
						style={styles.wrapper}
						showsButtons={false}
						dotColor="#DEF4FE"
						activeDotColor="#5AC8FA"
						autoplay
						autoplayTimeout={8}
					>
						{boardList}
					</Swiper>
				</View>
				<TouchableHighlight
					style={styles.footer}
					onPress={() => console.log('Get Started')}
				>
					<Text style={styles.footerText}>Get started</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	boardsContainer: {
		flex: 1
	},
	footer: {
		height: 52,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FC6681'
	},
	footerText: {
		color: '#EEF9FE',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: '400'
	}
});
