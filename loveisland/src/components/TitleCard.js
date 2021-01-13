import React, { Component } from 'react';
import styled from 'styled-components';
import AnimPic from '../assets/animated-cast-title.png';
import Chevron from './Chevron.js';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//aclonica
//acme
//Aguafina Script
//Aladin
const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	papera: {
	  padding: theme.spacing(2),
	  textAlign: 'center',
	  backgroundColor: '#22A2ED',
	  height: 700
	},
	paperb: {
		padding: theme.spacing(2),
		textAlign: 'center',
		backgroundColor: '#ffee59',
		height: 700
	},
	paperc: {
		padding: theme.spacing(2),
		textAlign: 'center',
		backgroundColor: '#545454',
		height: 700
}
  }));

const Winning = styled.span`
  font-family: "Anton";
  font-size: 5rem;
  color: black;
`

const Header = styled.span`
  font-family: "Dancing Script";
  font-size: 4rem;
  color: black;
`
const Loveisland = styled.span`
  font-family: Aladin;
  font-size: 11rem;
  color: black;
`

const TitleWrapper = styled.div`
	width: 100vw;
	display: flex;
	height: auto;
	padding-bottom: 2vh;
	margin-bottom: 10vh;
	grid-template-columns: 30% 70% ;
	@media (max-width: 900px) {
		margin-bottom: 0;
		display: block;
		padding: 5vw;
	}
`
const Container = styled.div `{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
	alignItems: 'flex-start' 
	display: grid;
	padding: 10px;
	}
`

 const ItemA = styled.div `{
	width: '30%',
	background-color: #a2d6f9ff

  }`
  const ItemB = styled.div `{
	width: '70%',
	background-color: #fffd98ff
  }`


const ImgWrapper = styled.img`
	width: 100vw;
	display: flex;
	height: auto;
	padding-bottom: 2vh;
	margin-bottom: 10vh;
	@media (max-width: 900px) {
		position: static;
		width: 70vw;
		height: auto;
		margin-bottom: 0;
		margin-left: 10vw;
	}
`
const TitleImg = styled.img`
	margin-bottom: 5vh;
	width: 100%;
	max-height: 60vh;
`

const Title = styled.div`
	padding: 5% 5% 0 5%;
	width: 60vw;
	height: 100vh;
	margin-left: 5vw;
	@media (max-width: 900px) {
		padding-top: 5vh;
		width: 90vw;
		height: auto;
		margin-left: 0;
	}
`

const TitleSpan = styled.span`
	color: #7b1e7aff;
	font-family: "Tahoma", Geneva, sans-serif
`

const Authors = styled.div`
	width: 100%;
	display: flex;
	margin-top: 2vh;
	@media (max-width: 900px) {
		margin-bottom: 5vw;
	}
`

const AuthorName = styled.div`
	width: 30%;
	padding-right: 2em;
	font-weight: bold;
	font-size:2rem;
	color: #A581C6;
	@media (max-width: 900px) {
		margin-bottom: -5vh;
	}
`

const Description = styled.div`
	width: 90%;
	padding-top: 2%;
`
export default function TitleCard() {
	const classes = useStyles();

	return(
		<div className={classes.root}>
		{/* <TitleWrapper> */}
		<ImgWrapper src={AnimPic} />
		{/* </TitleWrapper> */}
			{/* <Grid container alignItems="stretch">
				<Grid item xs={3}>
					<div className={classes.papera}></div>
				</Grid>
				<Grid item xs={1}>
					<div className={classes.paperc}></div>
				</Grid>
				<Grid item xs={8}>
					<div className={classes.paperb}>
						<div>
							<Winning>
							 	winning
							</Winning>
						</div>
						<div>
							<Header>
							 	reality:
							</Header>
						</div>
						<div>
							<Loveisland>
								LOVE ISLAND
							</Loveisland>
						</div>
						<Authors>
							<AuthorName>
								by: Ria Garg
							</AuthorName>
						</Authors>
					</div>
				</Grid>
			</Grid> */}
		</div>		
	);
}
// class TitleCard extends Component {
	
// 	constructor(props) {
// 		super(props)
// 	}

// 	classes = useStyles();

// 	render() {
// 		return (
// 			<div className={classes.root}>
// 				<Grid container spacing={3}>
// 					<Grid item xs={12}>
// 						<Paper className={classes.paper}>xs=3</Paper>
// 					</Grid>
// 					<Grid item xs={6}>
// 						<Paper className={classes.paper}>xs=9</Paper>
// 					</Grid>
	
// 				</Grid>
// 			</div>		
// 		)
// 	}
// }
	