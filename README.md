# MatchHub

MatchHub is a cricket match management system that allows users to track and manage cricket matches, teams, players, and their performance. It provides a user-friendly interface to interact with cricket data and gain insights into team and player statistics.

## Features

- Create and manage cricket matches, including date, teams, venue, player of the match, and match result.
- View the details of a specific match by its unique ID.
- Fetch all matches and filter them by date.
- Retrieve team performance statistics, such as the number of matches played, wins, losses, and ties.
- Update team details, including wins, losses, and ties, to reflect the latest performance.
- Explore a list of all players and their associated information.

## Installation

1. Clone the repository:

```shell
git clone https://github.com/AbhishekVarshney98/MatchHub.git
```

2. Install the dependencies:

```shell
cd MatchHub
npm install
```

3. Configure the environment variables:

- Environment variables(Port and DB URI) are already set in the `.env` file.
- Update the necessary environment variables if needed, such as the database connection details.

4. Start the application:

```shell
npm start
```

The application will start running at `http://localhost:3000`.

## Testing

To run the unit tests, use the following command:

```shell
npm test
```

## API Documentation

The API documentation for the endpoints and their usage can be found in the [API Documentation](api-documentation.md) file.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)
- Jest (Testing Framework)

## Contributing

Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please open an issue or submit a pull request.

## Contact

For any inquiries or support, please contact abhishekvarshney222@gmail.com.

---
