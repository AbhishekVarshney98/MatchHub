# MatchHub API Documentation

## Base URL

The base URL for all API endpoints is: `http://localhost:3000/`

## Endpoints

### GET /showmatches

Fetches all matches.

#### Response

- Status Code: 200 (OK)
- Response Body:

```json
[
    {
        "_id": "64942966622d45af87094562",
        "date": "2023-05-29T00:00:00.000Z",
        "teams": [
            {
                "_id": "64942166622d45af87094536",
                "name": "RR",
                "players": [
                    {
                        "_id": "649420f4622d45af8709449f",
                        "name": "Virat Kohli"
                    },
                    {
                        "_id": "649420f4622d45af870944a1",
                        "name": "Kane Williamson"
                    },
                    {
                        "_id": "649420f4622d45af870944a3",
                        "name": "Steve Smith"
                    },
                    {
                        "_id": "649420f4622d45af870944a5",
                        "name": "Joe Root"
                    },
                    {
                        "_id": "649420f4622d45af870944a7",
                        "name": "David Warner"
                    },
                    {
                        "_id": "649420f4622d45af870944a9",
                        "name": "Babar Azam"
                    },
                    {
                        "_id": "649420f4622d45af870944ab",
                        "name": "Rohit Sharma"
                    },
                    {
                        "_id": "649420f4622d45af870944ad",
                        "name": "Quinton de Kock"
                    },
                    {
                        "_id": "649420f4622d45af870944af",
                        "name": "Shakib Al Hasan"
                    },
                    {
                        "_id": "649420f4622d45af870944b1",
                        "name": "Jos Buttler"
                    },
                    {
                        "_id": "649420f5622d45af870944b3",
                        "name": "Kagiso Rabada"
                    }
                ]
            },
            {
                "_id": "64942166622d45af87094538",
                "name": "CSK",
                "players": [
                    {
                        "_id": "649420f5622d45af870944b5",
                        "name": "Pat Cummins"
                    },
                    {
                        "_id": "649420f5622d45af870944b7",
                        "name": "Jasprit Bumrah"
                    },
                    {
                        "_id": "649420f5622d45af870944b9",
                        "name": "Trent Boult"
                    },
                    {
                        "_id": "649420f5622d45af870944bb",
                        "name": "Bhuvneshwar Kumar"
                    },
                    {
                        "_id": "649420f5622d45af870944bd",
                        "name": "Mushfiqur Rahim"
                    },
                    {
                        "_id": "649420f5622d45af870944bf",
                        "name": "Rashid Khan"
                    },
                    {
                        "_id": "649420f5622d45af870944c1",
                        "name": "Faf du Plessis"
                    },
                    {
                        "_id": "649420f5622d45af870944c3",
                        "name": "Kieron Pollard"
                    },
                    {
                        "_id": "649420f5622d45af870944c5",
                        "name": "Ben Stokes"
                    },
                    {
                        "_id": "649420f5622d45af870944c7",
                        "name": "Ross Taylor"
                    },
                    {
                        "_id": "649420f5622d45af870944c9",
                        "name": "Shai Hope"
                    }
                ]
            }
        ],
        "venue": "Greenfield International Stadium",
        "playerOfMatch": {
            "_id": "649420f4622d45af8709449f",
            "name": "Virat Kohli"
        },
        "matchResult": "RR won by 5 runs",
        "__v": 0
    },
  // More matches...
]
```

### GET /show-match-by-id/:id

Fetches a specific match by its ID.

#### Parameters

- `id` (ObjectId): The unique ID of the match.

#### Response

- Status Code: 200 (OK)
- Response Body:

```json
{
    "_id": "64942966622d45af87094562",
    "date": "2023-05-29T00:00:00.000Z",
    "teams": [
        {
            "_id": "64942166622d45af87094536",
            "name": "RR",
            "players": [
                {
                    "_id": "649420f4622d45af8709449f",
                    "name": "Virat Kohli"
                },
                {
                    "_id": "649420f4622d45af870944a1",
                    "name": "Kane Williamson"
                },
                {
                    "_id": "649420f4622d45af870944a3",
                    "name": "Steve Smith"
                },
                {
                    "_id": "649420f4622d45af870944a5",
                    "name": "Joe Root"
                },
                {
                    "_id": "649420f4622d45af870944a7",
                    "name": "David Warner"
                },
                {
                    "_id": "649420f4622d45af870944a9",
                    "name": "Babar Azam"
                },
                {
                    "_id": "649420f4622d45af870944ab",
                    "name": "Rohit Sharma"
                },
                {
                    "_id": "649420f4622d45af870944ad",
                    "name": "Quinton de Kock"
                },
                {
                    "_id": "649420f4622d45af870944af",
                    "name": "Shakib Al Hasan"
                },
                {
                    "_id": "649420f4622d45af870944b1",
                    "name": "Jos Buttler"
                },
                {
                    "_id": "649420f5622d45af870944b3",
                    "name": "Kagiso Rabada"
                }
            ]
        },
        {
            "_id": "64942166622d45af87094538",
            "name": "CSK",
            "players": [
                {
                    "_id": "649420f5622d45af870944b5",
                    "name": "Pat Cummins"
                },
                {
                    "_id": "649420f5622d45af870944b7",
                    "name": "Jasprit Bumrah"
                },
                {
                    "_id": "649420f5622d45af870944b9",
                    "name": "Trent Boult"
                },
                {
                    "_id": "649420f5622d45af870944bb",
                    "name": "Bhuvneshwar Kumar"
                },
                {
                    "_id": "649420f5622d45af870944bd",
                    "name": "Mushfiqur Rahim"
                },
                {
                    "_id": "649420f5622d45af870944bf",
                    "name": "Rashid Khan"
                },
                {
                    "_id": "649420f5622d45af870944c1",
                    "name": "Faf du Plessis"
                },
                {
                    "_id": "649420f5622d45af870944c3",
                    "name": "Kieron Pollard"
                },
                {
                    "_id": "649420f5622d45af870944c5",
                    "name": "Ben Stokes"
                },
                {
                    "_id": "649420f5622d45af870944c7",
                    "name": "Ross Taylor"
                },
                {
                    "_id": "649420f5622d45af870944c9",
                    "name": "Shai Hope"
                }
            ]
        }
    ],
    "venue": "Greenfield International Stadium",
    "playerOfMatch": {
        "_id": "649420f4622d45af8709449f",
        "name": "Virat Kohli"
    },
    "matchResult": "RR won by 5 runs",
    "__v": 0
}
```

### GET /showmatch/:date

Fetches matches by a specific date.

#### Parameters

- `date` (string): The date in the format "YYYY-MM-DD".

#### Response

- Status Code: 200 (OK)
- Response Body:

```json
[
    {
        "_id": "64942966622d45af8709456e",
        "date": "2023-04-23T00:00:00.000Z",
        "teams": [
            "64942166622d45af87094538",
            "64942166622d45af8709453c"
        ],
        "venue": "Rajiv Gandhi International Cricket Stadium",
        "playerOfMatch": "649420f5622d45af870944e5",
        "matchResult": "SRH won by 2 runs",
        "__v": 0
    }
]
```
### PUT /match/:id

Updates the details of completed match by playerOfMatch and matchResult

#### Parameters
- `id` (ObjectId): The unique ID of the match
- Request Body (JSON):

```json
{
  "playerOfMatch": "649420f4622d45af8709449f",
  "matchResult": "RR won by 5 runs"
}
```
#### Response
- Status Code: 200 (OK)
- Response Body:

```json
{
    "_id": "64942966622d45af87094562",
    "date": "2023-05-29T00:00:00.000Z",
    "teams": [
        "64942166622d45af87094536",
        "64942166622d45af87094538"
    ],
    "venue": "Greenfield International Stadium",
    "playerOfMatch": "649420f4622d45af8709449f",
    "matchResult": "RR won by 5 runs",
    "__v": 0
}
```
### PUT /match/:id

Updates the details of completed match by playerOfMatch and matchResult

#### Parameters
- `id` (ObjectId): The unique ID of the match
- Request Body (JSON):

```json
{
  "playerOfMatch": "649420f4622d45af8709449f",
  "matchResult": "RR won by 5 runs"
}
```
#### Response
- Status Code: 200 (OK)
- Response Body:

```json
{
    "_id": "64942966622d45af87094562",
    "date": "2023-05-29T00:00:00.000Z",
    "teams": [
        "64942166622d45af87094536",
        "64942166622d45af87094538"
    ],
    "venue": "Greenfield International Stadium",
    "playerOfMatch": "649420f4622d45af8709449f",
    "matchResult": "RR won by 5 runs",
    "__v": 0
}
```

### POST /match

Add a new upcoming match

#### Parameters
- Request Body (JSON):

```json
{
    "date":"2023-06-30T10:00:00Z",
    "teams":["64907cc24f3f2ba7ea6451c2","64907c343ffbb1e72f8261e7"],
    "venue":"wankhade"
}
```
#### Response
- Status Code: 201 (Created)

### GET /showteams

Fetches all the teams.

#### Response

- Status Code: 200 (OK)
- Response Body:

```json
[
  {
        "_id": "64942166622d45af87094536",
        "name": "RR",
        "players": [
            {
                "_id": "649420f4622d45af8709449f",
                "name": "Virat Kohli"
            },
            {
                "_id": "649420f4622d45af870944a1",
                "name": "Kane Williamson"
            },
            {
                "_id": "649420f4622d45af870944a3",
                "name": "Steve Smith"
            },
            {
                "_id": "649420f4622d45af870944a5",
                "name": "Joe Root"
            },
            {
                "_id": "649420f4622d45af870944a7",
                "name": "David Warner"
            },
            {
                "_id": "649420f4622d45af870944a9",
                "name": "Babar Azam"
            },
            {
                "_id": "649420f4622d45af870944ab",
                "name": "Rohit Sharma"
            },
            {
                "_id": "649420f4622d45af870944ad",
                "name": "Quinton de Kock"
            },
            {
                "_id": "649420f4622d45af870944af",
                "name": "Shakib Al Hasan"
            },
            {
                "_id": "649420f4622d45af870944b1",
                "name": "Jos Buttler"
            },
            {
                "_id": "649420f5622d45af870944b3",
                "name": "Kagiso Rabada"
            }
        ],
        "totalMatchesPlayed": 27,
        "wins": 20,
        "losses": 3,
        "ties": 4,
        "__v": 0
    },
  // More teams...
]
```

### GET /teampastmatches/:id

Fetches the past matches details of a specific team.

#### Parameters

- `id` (ObjectId): The unique ID of the team.

#### Response

- Status Code: 200 (OK)
- Response Body:

```json
[
    {
        "_id": "64942966622d45af87094562",
        "date": "2023-05-29T00:00:00.000Z",
        "teams": [
            "64942166622d45af87094536",
            "64942166622d45af87094538"
        ],
        "venue": "Greenfield International Stadium",
        "playerOfMatch": "649420f4622d45af8709449f",
        "matchResult": "RR won by 5 runs",
        "__v": 0
    },
    {
        "_id": "64942966622d45af87094564",
        "date": "2023-02-26T00:00:00.000Z",
        "teams": [
            "64942166622d45af87094536",
            "64942166622d45af8709453a"
        ],
        "venue": "Rajiv Gandhi International Cricket Stadium",
        "playerOfMatch": "649420f5622d45af870944cb",
        "matchResult": "GT won by 3 wickets",
        "__v": 0
    },
    {
        "_id": "64942966622d45af87094566",
        "date": "2023-04-30T00:00:00.000Z",
        "teams": [
            "64942166622d45af87094536",
            "64942166622d45af8709453c"
        ],
        "venue": "M. Chinnaswamy Stadium",
        "playerOfMatch": "649420f5622d45af870944e3",
        "matchResult": "SRH won by 3 runs",
        "__v": 0
    },
    {
        "_id": "64942966622d45af87094568",
        "date": "2023-03-12T00:00:00.000Z",
        "teams": [
            "64942166622d45af87094536",
            "64942166622d45af8709453e"
        ],
        "venue": "Rajiv Gandhi International Cricket Stadium",
        "playerOfMatch": "649420f5622d45af870944f7",
        "matchResult": "RCB won by 8 wickets",
        "__v": 0
    },
    {
        "_id": "64942966622d45af8709456a",
        "date": "2023-02-03T00:00:00.000Z",
        "teams": [
            "64942166622d45af87094536",
            "64942166622d45af87094540"
        ],
        "venue": "Punjab Cricket Association Stadium",
        "playerOfMatch": "649420f4622d45af870944a3",
        "matchResult": "RR won by 6 wickets",
        "__v": 0
    }
]
```

### GET /teamperformance/:id

Fetches the team's performance details.

#### Parameters

- `id` (ObjectID): The unique ID of the team.

#### Response

- Status Code: 200 (OK)
- Response Body:

```json
{
    "Team Name": "RR",
    "Team Matches Played": 27,
    "Team Wins": 20,
    "Team Losses": 3,
    "Team Ties": 4
}
```

### PUT /editteam/:id

Updates wins, losses and ties for a team.

#### Parameters

- `id` (ObjectID): The unique ID of the team.
- Request Body (JSON):

```json
{
  "wins": 8,
  "losses": 3,
  "ties": 0
}
```

#### Response

- Status Code: 200 (OK)

### POST /team

Add details of a new team

#### Parameters
- Request Body (JSON):

```json
{
    "name":"RR",
    "players":["649420f4622d45af8709449f","649420f4622d45af870944a1","649420f4622d45af870944a3","649420f4622d45af870944a5","649420f4622d45af870944a7"],
    "totalMatchesPlayed":8,
    "wins":4,
    "losses":3,
    "ties":1
}
```
#### Response
- Status Code: 201 (Created)


### GET /showplayers

Fetches all players.

#### Response

- Status Code: 200 (OK)
- Response Body:

```json
[
    {
        "_id": "649420f4622d45af8709449f",
        "name": "Virat Kohli",
        "__v": 0
    },
  // More players...
]
```
### POST /player

Add a new upcoming match

#### Parameters
- Request Body (JSON):

```json
{
    "name":"Ajinkya Rahane"
}
```
#### Response
- Status Code: 201 (Created)
  

---
