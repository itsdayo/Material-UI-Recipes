import React, { useState, useEffect } from "react";

import "./Home.css";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Box,
} from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";

// import { getRecipes } from "../actions";
import AddRecipe from "./AddRecipeModal";
import EditRecipe from "./EditRecipeModal";
import { getRecipes, loadRecipes, resetRecipes } from "../actions/recipes";
import { mockRecipes } from "../mockData/recipes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  specialsButton: {},
  addRecipeButton: {
    left: 10,
  },
  navButtonContainer: {
    marginRight: theme.spacing(3),
    right: 0,
    position: "absolute",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridList: {
    height: "auto",
    flexWrap: "wrap",
    overflow: "auto",
  },
  recipesList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  card: {
    width: 345,
    marginLeft: 5,
    height: 580,
    alignSelf: "center",
  },
  media: {
    height: 250,
    display: "flex",
    top: 0,
  },
}));

function App() {
  const classes = useStyles();
  const history = useHistory();
  const recipes = useSelector((state) => state.recipes);

  const [directions, setDirections] = useState({});
  const [ingredients, setIngredients] = useState({});
  const [open, setOpen] = useState(false);
  const [openForEdit, setOpenForEdit] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});

  useEffect(() => {
    //get recipes for state
    if (!recipes) {
      dispatch(loadRecipes(mockRecipes.recipes));
    }
  }, []);

  //open new add new recipe
  const handleClickOpen = () => {
    setOpen(true);
  };

  //open edit recipe modal
  const handleClickEditOpen = (tile) => {
    setCurrentRecipe(tile);
    setOpenForEdit(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleEditClose = (value) => {
    setOpenForEdit(false);
  };
  const dispatch = useDispatch();

  const handleNavigateDirectionsClick = (foodItem) => {
    history.push({
      pathname: `/directions/${foodItem.uuid}`,
    });
  };

  const handleNavigateIngredientsClick = (foodItem) => {
    history.push({
      pathname: `/ingredients/${foodItem.uuid}`,
    });
  };

  const reset = () => {
    dispatch(resetRecipes());
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Recipe List
          </Typography>
          <div className={classes.navButtonContainer}>
            <Button
              variant="outlined"
              className={classes.specialsButton}
              color="inherit"
              onClick={() => history.push("/specials")}
            >
              View the Specials
            </Button>
            <Button
              variant="outlined"
              className={classes.addRecipeButton}
              color="inherit"
              onClick={handleClickOpen}
            >
              Add Recipe
            </Button>
            <Button
              variant="outlined"
              className={classes.addRecipeButton}
              color="inherit"
              onClick={reset}
            >
              Reset Recipes
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <AddRecipe open={open} onClose={handleClose} />
      <EditRecipe
        currentRecipe={currentRecipe}
        open={openForEdit}
        onClose={handleEditClose}
      />
      <div className={classes.recipesList}>
        {recipes.recipesList.map((tile, index) => (
          <Card className={classes.card}>
            <CardActionArea>
              <div>
                {tile.images && (
                  <CardMedia
                    className={classes.media}
                    image={tile.images.medium}
                    title="Paella dish"
                    component="img"
                  />
                )}
                {!tile.images && (
                  <CardMedia
                    className={classes.media}
                    src={
                      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg"
                    }
                    title="Paella dish"
                    component="img"
                  />
                )}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {tile.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {tile.description}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography
                    gutterBottom
                    color="textSecondary"
                    variant="body2"
                    component="div"
                  >
                    Servings: {tile.servings}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                    gutterBottom
                  >
                    Prep time: {tile.prepTime}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                    gutterBottom
                  >
                    Cook time: {tile.cookTime}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                    gutterBottom
                  >
                    Posted: {tile.postDate}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                    gutterBottom
                  >
                    Edited: {tile.editDate}
                  </Typography>
                </CardContent>
              </div>
            </CardActionArea>
            <CardActions disableSpacing>
              <Button
                onClick={() => handleNavigateDirectionsClick(tile)}
                size="small"
                color="primary"
              >
                View Directions
              </Button>
              <Button
                onClick={() => handleNavigateIngredientsClick(tile)}
                size="small"
                color="primary"
              >
                View Ingredients
              </Button>
              <Button
                onClick={() => handleClickEditOpen(tile)}
                size="small"
                color="primary"
              >
                Edit
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
