export class TravelDestination {
    
    private selected: boolean;
    constructor(public name:string, public imageUrl:string){}
    isSelected() :boolean{
        return this.selected;
    }
    setSelected(select: boolean){
        this.selected = select;
    }
}