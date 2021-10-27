import * as React from "react";
import {styled, alpha} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {handleMovieSearch} from "../../services/actions/index"
import SearchCard from "../SearchCard/SearchCard"

const Search = styled("div")(({theme}) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

const SearhResultContainer = styled(Box)(({theme}) => ({
    backgroundColor: "#fff",
    position: "absolute",
    top: 64,
    right: 0,
    left: 0,
    overflow: "auto",
    height: "40vh",
    zIndex: 100,
    boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.3)"
}))

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            showSearchText: false,
        }
        this.unsubscribe = null
    }

    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(() => {
            console.log("UPDATED NAVBAR")
            this.forceUpdate()
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    handleChange = (e) => {
        const {dispatch} = this.props.store;
        dispatch(handleMovieSearch(e.target.value))
    }

    render() {
        const {search} = this.props.store.getState();
        console.log("from navbar = ", search.result)
        const {result: movies, showResultsContainer} = search
        return (
            <Box sx={{flexGrow: 1, position: "relative"}}>
                <AppBar position="sticky" color="primary">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="span"
                            sx={{flexGrow: 1, display: {xs: "none", sm: "block"}}}
                        >
                            Movies App
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{"aria-label": "search"}}
                                onChange={this.handleChange}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
                {showResultsContainer && (<SearhResultContainer>
                    {movies.map((movie, index) => (
                        < SearchCard
                            movie={movie}
                            key={index}
                        />
                    ))}
                </SearhResultContainer>)}
            </Box>
        );
    }
}

export default Navbar;
