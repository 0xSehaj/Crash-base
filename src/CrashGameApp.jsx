
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

export default function CrashGameApp() {
  const [autoBet, setAutoBet] = useState(false);

  const handleSound = (sound) => {
    const audio = new Audio(`/sounds/${sound}.mp3`);
    audio.play();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Crash Game (Base Testnet)</h1>

      <Tabs defaultValue="wallet" className="w-full max-w-3xl mx-auto">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="wallet">Wallet</TabsTrigger>
          <TabsTrigger value="crash">Crash</TabsTrigger>
          <TabsTrigger value="house">House</TabsTrigger>
        </TabsList>

        <TabsContent value="wallet">
          <Card className="mt-4">
            <CardContent className="space-y-4">
              <p>Your Wallet (Base Sepolia)</p>
              <p className="text-sm text-muted">Connected via Privy</p>
              <div className="space-y-2">
                <p>ETH Balance: 0.00</p>
                <Input type="text" placeholder="Send ETH to this address" readOnly value="0x...abc" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crash">
          <Card className="mt-4">
            <CardContent className="space-y-6 text-center">
              <h2 className="text-xl font-semibold">CRASH MULTIPLIER</h2>
              <p className="text-6xl font-bold text-green-400 animate-pulse">1.00x</p>
              <div className="flex flex-col items-center gap-2">
                <Input type="number" placeholder="Enter bet amount (ETH)" className="w-1/2" />
                <Button variant="default" onClick={() => handleSound("placebet")}>Place Bet</Button>
                <Button variant="secondary" onClick={() => handleSound("cashout")}>Cash Out</Button>
                <div className="flex items-center gap-2 mt-2">
                  <input type="checkbox" id="autobet" checked={autoBet} onChange={() => setAutoBet(!autoBet)} />
                  <label htmlFor="autobet" className="text-sm">Auto Bet Each Round</label>
                </div>
              </div>
              <p className="text-sm text-muted">Max bet: 1% of house pool. Max win: configured per round.</p>

              <div className="mt-6 text-left">
                <h3 className="text-lg font-semibold mb-2">Live History</h3>
                <div className="grid grid-cols-5 gap-2 text-sm text-gray-400">
                  <span>2.38x</span>
                  <span>1.52x</span>
                  <span className="text-red-400">💥</span>
                  <span>3.87x</span>
                  <span>1.04x</span>
                </div>
              </div>

              <div className="mt-6 text-left">
                <h3 className="text-lg font-semibold mb-2">Leaderboard (Last 5 rounds)</h3>
                <ul className="text-sm space-y-1">
                  <li>🚀 user1.eth - Won 0.25 ETH @ 3.21x</li>
                  <li>💸 user2.eth - Lost 0.10 ETH</li>
                  <li>🚀 user3.eth - Won 0.18 ETH @ 2.40x</li>
                  <li>💸 user4.eth - Lost 0.20 ETH</li>
                  <li>🚀 user5.eth - Won 0.34 ETH @ 4.91x</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="house">
          <Card className="mt-4">
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">House ETH Pool</h2>
              <p>Total Pool: 0.00 ETH</p>
              <p>APY: Coming Soon</p>
              <Button variant="default" onClick={() => handleSound("deposit")}>Deposit to House</Button>
              <p className="text-sm text-muted">Fund the pool others play against. Withdrawals restricted to admin.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
