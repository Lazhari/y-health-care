import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Screen extends Component {
	render() {
		const { imageSource, screenTitle, description } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image source={imageSource} />
				</View>
				<View style={styles.content}>
					<Text style={styles.title}>{screenTitle} </Text>
					<Text style={styles.contentText}>{description}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageContainer: {
		padding: 10,
		flex: 2,
		justifyContent: 'flex-end'
	},
	content: {
		flex: 1,
		padding: 40,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	title: {
		fontSize: 22,
		textAlign: 'center',
		marginBottom: 16,
		color: '#333333'
	},
	contentText: {
		fontSize: 18,
		textAlign: 'center',
		fontWeight: '200',
		color: '#333333'
	}
});
