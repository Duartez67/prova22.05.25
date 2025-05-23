import { randomUUID } from "crypto";
import express from "express";
import fs from "fs";


const server = express();
const PORT = 8000;


server.use(express.json());


function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) return reject(err);
      resolve(data ? JSON.parse(data) : []);
    });
  });
}
function writeFile(file, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(file, JSON.stringify(data, null, 2), (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
  

