// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

#ifndef SRC_STATS_H_
#define SRC_STATS_H_

#include <string>
#include <napi.h>

#include "./common.h"

struct ChannelStats {
  // stats per channel
  int min;
  int max;
  double sum;
  double squaresSum;
  double mean;
  double stdev;
  int minX;
  int minY;
  int maxX;
  int maxY;

  ChannelStats(int minVal, int maxVal, double sumVal, double squaresSumVal,
    double meanVal, double stdevVal, int minXVal, int minYVal, int maxXVal, int maxYVal):
    min(minVal), max(maxVal), sum(sumVal), squaresSum(squaresSumVal),
    mean(meanVal), stdev(stdevVal), minX(minXVal), minY(minYVal), maxX(maxXVal), maxY(maxYVal) {}
};

struct StatsBaton {
  // Input
  sharp::InputDescriptor *input;

  // Output
  std::vector<ChannelStats> channelStats;
  bool isOpaque;
  double entropy;
  double sharpness;
  int dominantRed;
  int dominantGreen;
  int dominantBlue;

  std::string err;

  StatsBaton():
    input(nullptr),
    isOpaque(true),
    entropy(0.0),
    sharpness(0.0),
    dominantRed(0),
    dominantGreen(0),
    dominantBlue(0)
    {}
};

Napi::Value stats(const Napi::CallbackInfo& info);

#endif  // SRC_STATS_H_
