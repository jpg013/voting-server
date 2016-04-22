import {setEntries, next, vote, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
    if (!action) { return state; }
    switch(action.type) {
        case 'SET_ENTRIES':
          return setEntries(state, action.entries);
        case 'NEXT':
          return next(state);
        case 'VOTE':
          return vote(state, action.entry);
    }
    return state;
}
