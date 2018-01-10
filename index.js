class Driver {
  constructor(name, date){
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()

  }


}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let totalBlocks = 0

    let horizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    let vertical = this.endingLocation.vertical - this.beginningLocation.vertical

    return totalBlocks = Math.abs(horizontal) + Math.abs(vertical);

  }

  estimatedTime(peak){
    let blocks = this.blocksTravelled()
    if (peak){
      return parseInt(blocks*1/2);
    } else {
      return parseInt(blocks*1/3);
    }
  }



}
