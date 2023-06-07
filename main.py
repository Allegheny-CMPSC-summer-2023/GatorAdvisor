import csv
import json
from rich import print


def parse_csv_to_json(csv_file_path):
    json_data = []
    with open(csv_file_path, "r") as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            json_data.append(row)
    return json_data


# Provide the CSV file path/change this to your desired location
csv_file_path = "/Users/rawlings/Downloads/data.csv"

# Call the function and store the result
json_data = parse_csv_to_json(csv_file_path)

# Convert the JSON data to a JSON schema
json_schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "array",
    "items": {"type": "object", "properties": json_data[0]}
}

# Print the JSON schema using Rich library
print("[bold]JSON Schema:[/bold]")
print(json_schema)

# Save the JSON data to a file\we might save all these in our repo
output_file_path = "/Users/rawlings/Downloads/output.json"
with open(output_file_path, "w") as output_file:
    json.dump(json_data, output_file)

# Print the path to the output file
print("Output JSON file saved at:", output_file_path)
