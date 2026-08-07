CREATE TABLE IF NOT EXISTS activity_events
(
  event_id UUID,
  tracking_id String,
  event_type Enum8('challenge_submit' = 1),
  challenge_id String,
  url String CODEC(ZSTD),
  occurred_at DateTime64(3, 'UTC'),
  activity_date Date,
  timezone LowCardinality(String),
  ingested_at DateTime64(3, 'UTC') DEFAULT now64(3)
)
ENGINE = ReplacingMergeTree(ingested_at)
PARTITION BY toYYYYMM(activity_date)
ORDER BY (tracking_id, activity_date, event_id);
