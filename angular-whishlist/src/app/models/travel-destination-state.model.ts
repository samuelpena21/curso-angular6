  
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { TravelDestination } from './travel-destination.model';
import { HttpClientModule } from '@angular/common/http';



export interface TravelsDestinationsState {
    items: TravelDestination[];
    loading: boolean;
    favorite: TravelDestination;
}

export function initializeTravelsDestinationsState(){
    return {
        items: [],
        loading: false,
        favorite: null
    };
}

/*
export const initializeTravelsDestinationsState = function() {
    return {
        items: [],
        loading: false,
        favorite: null
    }
}*/


export enum TravelsDestinationsActionsTypes {

    NEW_DESTINATION = '[Travels Destinations] NEW',
    CHOOSEN_FAVORITE = '[Travels Destinations] FAVORITE',
    VOTE_UP = '[Travels Destinations] VOTE UP',
    VOTE_DOWN = '[Travels Destinations] VOTE DOWN',
    RESET_VOTES ='[Travesls Destinatios] RESETS VOTES',
    INIT_MY_DATA = '[Travels Destinations] INIT MY DATA' 
}


export class NewDestinationAction implements Action {
    type = TravelsDestinationsActionsTypes.NEW_DESTINATION;
    constructor(public destination: TravelDestination){

    }
}

export class VoteUpAction implements Action {
    type = TravelsDestinationsActionsTypes.VOTE_UP;
    constructor(public destination: TravelDestination){

    }
}

export class VoteDownAction implements Action {
    type = TravelsDestinationsActionsTypes.VOTE_DOWN;
    constructor(public destination: TravelDestination){
        
    }
}

export class ResetVotesActions implements Action {
    type = TravelsDestinationsActionsTypes.RESET_VOTES;
    constructor(public destination: TravelDestination){
        
    }
}

export class InitMyDataAction implements Action {
    type = TravelsDestinationsActionsTypes.INIT_MY_DATA;
    constructor(public  destinations: string[]){

    }
}


export class ChoosenFavoriteAction implements Action{
    type = TravelsDestinationsActionsTypes.CHOOSEN_FAVORITE;
    constructor(public destination: TravelDestination){

    }
}


export type TravelsDestinationActions = NewDestinationAction | ChoosenFavoriteAction
    | VoteUpAction | VoteDownAction | InitMyDataAction;

export function reducerTravelsDestinations(
    state: TravelsDestinationsState,
    action: TravelsDestinationActions
): TravelsDestinationsState {
    switch(action.type) {

        case TravelsDestinationsActionsTypes.INIT_MY_DATA: {
            const destinations: string[] = (action as InitMyDataAction).destinations;
            return {
                ...state, 
                items: destinations.map((dest) => new TravelDestination(dest, ''))
            }; 
        }

        case TravelsDestinationsActionsTypes.NEW_DESTINATION: {
            return {
                ...state,
                items: [...state.items, (action as NewDestinationAction).destination]
            };
        }
        case TravelsDestinationsActionsTypes.CHOOSEN_FAVORITE: {
            state.items.forEach(x => x.setSelected(false));
            let fav: TravelDestination = (action as ChoosenFavoriteAction).destination;
            fav.setSelected(true);
            return {
                ...state,
                favorite: fav
            };
        }

        case TravelsDestinationsActionsTypes.VOTE_UP: {
            const dest: TravelDestination = (action as VoteUpAction).destination;
            dest.voteUp();
            return { ...state }; 
        }

        case TravelsDestinationsActionsTypes.VOTE_DOWN: {
            const dest: TravelDestination = (action as VoteDownAction).destination;
            dest.voteDown();
            return { ...state };
        }
        
        case TravelsDestinationsActionsTypes.RESET_VOTES: {
            const dest: TravelDestination = (action as ResetVotesActions).destination;
            dest.resetVotes();
            return { ...state };
        }
    }
    return state;
}

@Injectable()
export class TravelsDestinationsEffects {
    @Effect()
    newAdded$: Observable<Action> = this.actions$.pipe(
        ofType(TravelsDestinationsActionsTypes.NEW_DESTINATION), 
        map((action: NewDestinationAction) => new ChoosenFavoriteAction(action.destination))
    );

    constructor(private actions$: Actions){

    }
}

