
# Currency Converter App

This Currency Converter web application allows users to quickly convert between different currencies based on real-time exchange rates fetched from an external API.

## Features

- **Real-Time Exchange Rates:** Fetches the latest exchange rates from the [ExchangeRate-API](https://www.exchangerate-api.com/) to provide accurate currency conversions.
  
- **Multiple Currency Options:** Supports conversion between various major currencies such as USD, EUR, GBP, JPY, AUD, CAD, CNY, INR, BRL, ZAR.
  
- **Dynamic Conversion:** Calculates the converted amount based on user input (amount, from currency, to currency).
  
- **Loading Indicator:** Displays a loading message while fetching exchange rate data to enhance user experience.

## Technologies Used

- **React.js:** Frontend JavaScript library for building user interfaces.
- **Vite:** Next-generation frontend tool that provides fast build times and an optimized development experience.
- **Axios:** HTTP client for making API requests.
- **CSS:** Styling the components for a better user interface.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/currency-converter.git
   ```

2. Navigate into the project directory:

   ```bash
   cd currency-converter
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application in development mode:

   ```bash
   npm run dev
   ```

5. Open your web browser and navigate to `http://localhost:3000` to start using the Currency Converter App.

## Usage

- Enter the amount you wish to convert in the "Amount" input field.
- Select the currency you want to convert from in the "From Currency" dropdown.
- Select the currency you want to convert to in the "To Currency" dropdown.
- The converted amount will be displayed dynamically based on the selected currencies and amount.
- If both currencies are the same or any required input fields are empty, conversion results will not be displayed.

## API Rate Limit

The ExchangeRate-API used in this application has rate limits for free usage. Please refer to their [documentation](https://www.exchangerate-api.com/docs) for more details on rate limits and premium plans.

## Contributing

Contributions are welcome! If you have suggestions for improvement, please fork the repository and create a pull request.

