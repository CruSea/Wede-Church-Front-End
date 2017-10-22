

export class Church{

  id: number;
  name: string;
  description: string;
  location: string;
  logo: string;
  lat: number;
  long: number;

  constructor(id: number, name: string, description: string, location: string, logo: string, lat: number, long: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.location = location;
    this.logo = logo;
    this.lat = lat;
    this.long = long;
  }


}
