import React, { useState, useEffect } from "react";
import "./Home.css";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import AddIngredient from "./AddIngredientModal";
import EditIngredient from "./EditIngredientModal";
import { getCurrentRecipe } from "../actions/recipes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  specialsButton: {},

  navButtonContainer: {
    marginRight: theme.spacing(3),
    right: 0,
    position: "absolute",
  },
  gridList: {
    height: "auto",
    flexWrap: "wrap",
    overflow: "auto",
    paddingTop: 50,
  },
  ingredientsList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  card: {
    width: 500,
    height: 150,
    alignSelf: "center",
    marginTop: 20,
    display: "flex",
    backgroundColor: "#F0F0F0",
  },
}));

function Ingredients() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { recipeId } = useParams();
  const [open, setOpen] = useState(false);
  const [openForEdit, setOpenForEdit] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState({});
  const classes = useStyles();
  useEffect(() => {
    dispatch(getCurrentRecipe(recipeId));
  }, []);

  //grad the current ingredient from redux
  const ingredients = useSelector(
    (state) => state.recipes.currentRecipe.ingredients
  );

  //open the add new ingredient modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  //close the add new ingredient modal
  const handleClose = (value) => {
    setOpen(false);
  };

  //close the edit ingredient modal
  const handleEditClose = (value) => {
    setOpenForEdit(false);
  };

  //open the edit ingredient modal and set the current ingredient click to state
  const handleClickEditOpen = (tile) => {
    setCurrentIngredient(tile);
    setOpenForEdit(true);
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
              className={classes.specialsButton}
              color="inherit"
              onClick={handleClickOpen}
            >
              Add Ingredient
            </Button>
            <Button
              variant="outlined"
              className={classes.specialsButton}
              color="inherit"
              onClick={() => history.push("/")}
            >
              Go to Home Page
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <AddIngredient open={open} onClose={handleClose} />
      <EditIngredient
        currentIngredient={currentIngredient}
        open={openForEdit}
        onClose={handleEditClose}
      />
      <div className={classes.ingredientsList}>
        {ingredients.map((tile, index) => (
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {tile.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Measurement: {tile.measurement}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Amount: {tile.amount}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
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

export default Ingredients;
