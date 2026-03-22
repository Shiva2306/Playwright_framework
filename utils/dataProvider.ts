import fs from 'fs';
import { parse } from 'csv-parse/sync';

export class DataProvider{

static getTestDataFromJson(filePath:string)
{
    let data:any =JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return data;
}


static getTestDataFromCsv(filePath:string)
{
     let data:any= parse(fs.readFileSync(filePath),{columns:true,skip_empty_lines:true})
    return data;
    }


}

//This code creates a utility class DataProvider to read test data from JSON and CSV files.
//  The getTestDataFromJson method reads a JSON file using fs, converts it into JavaScript object using JSON.parse, and returns the data. 
// The getTestDataFromCsv method reads a CSV file and uses parse to convert it into structured data (array of objects), where each row becomes one object. 
// This helps reuse test data easily for data-driven testing.