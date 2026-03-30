// market.ts

// Market Engine for Price Fluctuations and Trading Logic

class Market {
    private prices: Map<string, number>;  // A map to store the prices of assets
    private tradingVolume: Map<string, number>; // A map to track volume for each asset

    constructor() {
        this.prices = new Map();
        this.tradingVolume = new Map();
    }

    // Method to set the initial price of an asset
    setInitialPrice(asset: string, price: number): void {
        this.prices.set(asset, price);
        this.tradingVolume.set(asset, 0);
    }

    // Method to simulate price fluctuations
    fluctuatePrice(asset: string): void {
        if (!this.prices.has(asset)) {
            throw new Error(`Asset ${asset} does not exist in the market.`);
        }
        const currentPrice = this.prices.get(asset)!;
        const fluctuation = (Math.random() - 0.5) * 0.1; // Random fluctuation
        this.prices.set(asset, parseFloat((currentPrice + fluctuation * currentPrice).toFixed(2))); // Update price
    }

    // Method to buy an asset
    buyAsset(asset: string, quantity: number): void {
        if (!this.prices.has(asset)) {
            throw new Error(`Asset ${asset} does not exist in the market.`);
        }
        const price = this.prices.get(asset)!;
        const cost = price * quantity;
        console.log(`Bought ${quantity} of ${asset} for $${cost.toFixed(2)}`);
        this.tradingVolume.set(asset, this.tradingVolume.get(asset)! + quantity);
    }

    // Method to sell an asset
    sellAsset(asset: string, quantity: number): void {
        if (!this.prices.has(asset)) {
            throw new Error(`Asset ${asset} does not exist in the market.`);
        }
        const price = this.prices.get(asset)!;
        const revenue = price * quantity;
        console.log(`Sold ${quantity} of ${asset} for $${revenue.toFixed(2)}`);
        this.tradingVolume.set(asset, this.tradingVolume.get(asset)! - quantity);
    }

    // Method to get the current price of an asset
    getPrice(asset: string): number {
        if (!this.prices.has(asset)) {
            throw new Error(`Asset ${asset} does not exist in the market.`);
        }
        return this.prices.get(asset)!;
    }
}

// Example usage
const market = new Market();
market.setInitialPrice('BTC', 50000);
market.fluctuatePrice('BTC');
market.buyAsset('BTC', 2);
market.sellAsset('BTC', 1);
console.log(`Current price of BTC: $${market.getPrice('BTC')}`);