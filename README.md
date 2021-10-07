# redux_sandbox1

All about Redux with React

## What is **_Redux_**?

> Redux is a package aka a state management tool, that creates a **Global State** that you share between **React Components** (no parent / child relationship required)

When using Redux you don't actually change the **State**, you create updated copies of the state that are inserted into React **components**.

## React Terms

**React**: A Javascript library by Facebook, used for building user interfaces, and allows devs to create large web applications that can change data without reloading the page. (Virtual DOM) It's goal is to be fast, scalable and simple.

**Component**: conceptually they are like Javascript functions. They always start with a capital letter. They are **reusable** bits of code. Small, contained JavaScript files where you can keep all of your HTML and JavaScript in one place. There are two kinds, Class and Functional. Class components are also known as **Stateful**, they implement logic and state. Functional or **Stateless** components are plain JS functions that accept **props** as an argument and return a React element. They accept data and display them in some form.

**State**: is the condition of something at a particular point in time. A dynamic form of storage that lives in our components. It is a javascript object used by React to represent information about a component's current situation. When state changes, the component responds by re-rendering.

**Props**: Short for 'properties', they are variables used to pass data from one component to another. From a parent component to child component. Props data is immutable or 'read-only'.

## Why Redux?

**React Redux implements many performance optimizations internally, so that your own component only re-renders when it actually needs to.**

Small React apps are fine for using local state (accessible only by the single component since neither its current state nor update functions get passed by props anywhere). But for a large applications, some problems you start to run into are:

1. Passing State down through more than two components makes all the components rely on each other which is not very scalable.

2. Using the same State through components that don't have parent/child relationship is redundant, requires additional calls to the backend server.

This is where Redux comes in to help! Redux is a **predictable state container**. The state is kept in one **store** and components listen to the data in the store that it needs.

## Redux Terms

**Store / Global State**: It is an object that holds the apps state tree; think of it as a mega state that is accessed and updated with its own functions. It is the Central Location for all of your apps state. There should only be a single store in a Redux app, the composition happens on the reducer level.

**State**: In Redux it usually refers to the single state value that is managed by the store and returned by `getState()`. It represents the entire state of a Redux app, and that is often a deeply nested object.

**Action**: A object containing a type and a payload, used to tell the reducer how to update the store.

**Action Creator**: A function that takes a payload and creates an action object. A function that returns an action.

**Reducers**: A reducer is a function that determines changes to the Redux state. It is a pure function that returns a **copy** of the state with new changes. You can have many reducers and combine them all into one **root reducer** that the store uses with `combineReducers` method. This helps organize code white still having everything in one root state tree.
