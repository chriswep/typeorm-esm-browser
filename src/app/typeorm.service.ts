import { Injectable } from "@angular/core";
import { createConnection } from "typeorm";

@Injectable({
  providedIn: "root",
})
export class TypeormService {
  constructor() {
    createConnection({
      type: "sqljs",
      location: "test",
      autoSave: true,
      entities: [],
      logging: ["query", "schema"],
      synchronize: true,
    }).then(async (connection) => {
      console.log(connection);
    });
  }
}
