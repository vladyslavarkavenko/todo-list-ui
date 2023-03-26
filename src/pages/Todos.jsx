import React, {useMemo, useState} from "react";
import {Box, Checkbox, FormControlLabel, Grid, TextField, Typography, Link} from "@mui/material";

import {Page} from "../components/Page";
import {ModalLayout} from "../components/ModalLayout";
import {useTodo} from "../store/todo";
import {ReactComponent as CrossSVG} from "../assets/icons/cross.svg";

const todoListMeta = 'Task list';

const FILTER_MAP = {
    "All": () => true, // Default
    "Completed": (todo) => todo.completed,
    "Uncompleted": (todo) => !todo.completed,
}
const FILTER = Object.keys(FILTER_MAP);

const Todos = () => {
    const [filter, setFilter] = useState(FILTER[0]);
    const onFilterClick = (e) => {
        setFilter(e.target.value);
    }

    const {todoList, createTodoItem, markTodoItemCompleted, markTodoItemUncompleted, deleteTodoItem} = useTodo();
    const filteredTodoList = useMemo(
        () => todoList.filter(FILTER_MAP[filter]),
        [todoList, filter]
    );
    const onCompletedChange = ({id, completed}) => {
        if (completed) {
            markTodoItemCompleted({id});
        } else {
            markTodoItemUncompleted({id});
        }
    }

    const [newTodo, setNewTodo] = useState("");
    const onNewTodoSubmit = (e) => {
        if (e.key === "Enter" && newTodo) {
            createTodoItem({title: newTodo});
            setNewTodo("");
        }
    }

    return (
        <Page description={todoListMeta} keywords={todoListMeta} title={todoListMeta}>
            <ModalLayout title="Todo List">
                <Box>
                    <TextField
                        autoFocus
                        name="newTodo"
                        placeholder="Add a new todo"
                        variant="standard"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        onKeyDown={onNewTodoSubmit}
                        fullWidth
                    />
                    <Box my={2}>
                        {filteredTodoList.map(({id, title, completed}) => (
                            <Grid
                                key={id}
                                container
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                sx={{
                                    "&:hover #delete-btn": {
                                        display: "block"
                                    }
                                }}
                            >
                                <FormControlLabel
                                    label={title}
                                    control={
                                        <Checkbox
                                            name="completed"
                                            checked={completed}
                                            onChange={(e) => onCompletedChange({id, completed: e.target.checked})}
                                        />
                                    }
                                />
                                <Box id="delete-btn" hidden sx={{cursor: "pointer", padding: "0.5rem"}}>
                                    <CrossSVG onClick={() => deleteTodoItem({id})}/>
                                </Box>
                            </Grid>
                        ))}
                    </Box>
                </Box>

                <Grid
                    container
                    direction="row"
                    alignItems="center"
                >
                    <Typography variant="h6" component="p" mr={2}>
                        Show:
                    </Typography>
                    {FILTER.map((value) => (
                        <Link
                            key={value}
                            value={value}
                            onClick={onFilterClick}
                            component="button"
                            variant="h5"
                            color={filter === value ? "inherit" : "primary"}
                            underline={filter === value ? "none" : "always"}
                            style={{marginRight: "0.635rem"}}
                        >
                            {value}
                        </Link>
                    ))}
                </Grid>
            </ModalLayout>
        </Page>
    )
};
export default Todos;