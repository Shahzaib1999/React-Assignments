import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ChatIcon from '@material-ui/icons/Chat';
import FbImageLibrary from 'react-fb-image-grid'
import FacebookEmoji from 'react-facebook-emoji';
import moment from 'moment'


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
});

class RecipeReviewCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reaction:false
        };
        this.ShowReactions=this.ShowReactions.bind(this)
      }

      ShowReactions(){

        this.setState({reaction: !this.state.reaction})

    }

  render() {
    const { classes } = this.props;
    const { reaction } = this.state;



const pictures = [
      'https://www.w3schools.com/w3css/img_lights.jpg',
      'https://images.wallpaperscraft.com/image/nissan_auto_black_street_87159_300x168.jpg',
      'https://i.pinimg.com/originals/45/74/c6/4574c68d814dc0d3a64611ee401ea7dc.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznJ7OW6c4KQGDxXhv_jbV9CFad5VcjBE2GhVmFVXPTPbscU7-',
      'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjkxNzZ9&s=376e2026519afa2d234a56cb25efa9c5&w=1000&q=80',
      'https://images.unsplash.com/photo-1481567758055-3e8a6e89ca58?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f30108ad27a5a9d7e4ee92d24412d01&w=1000&q=80',

    ]

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" width="50px"></img>
          }
          
          title="Saad Pasta"
          subheader={moment().startOf('hour').fromNow()}
        />
         <CardContent>
          <Typography component="p">
          Lorem ipsum dolor sit amet, ea facete inermis sed, sea te summo eripuit dolores, eum idque impetus instructior at. Vis ei impedit splendide, te mei saperet laoreet. Everti dolores praesent ne qui, no eum accommodare definitiones, vide tation rationibus te eum. Meis ullum iusto ad eum. Sea ornatus corpora deleniti te.
          </Typography>
        
        <FbImageLibrary images={pictures} width={100}/>
        {/*   */}

        <hr></hr>
        {reaction && 
        <div className="emojiDiv">
        <FacebookEmoji type="like" size="sm" />
        <FacebookEmoji type="love" size="sm"/>
        <FacebookEmoji type="wow" size="sm"/>
        <FacebookEmoji type="yay" size="sm"/>
        <FacebookEmoji type="angry" size="sm"/>
        <FacebookEmoji type="haha" size="sm"/>
        <FacebookEmoji type="sad" size="sm"/>
    </div>}
        </CardContent>

        <CardActions className={classes.actions} disableActionSpacing>
        
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon 
onMouseEnter={() =>this.ShowReactions(true)}     
        /> <p>Like</p>
          </IconButton>

          <IconButton aria-label="Chat">
            <ChatIcon /> <p>Comment</p>
          </IconButton>

          <IconButton aria-label="Share">
            <ShareIcon /><p>Share</p>
          </IconButton>

        </CardActions>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);