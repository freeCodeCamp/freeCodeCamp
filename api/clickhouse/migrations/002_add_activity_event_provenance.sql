ALTER TABLE activity_events
  ADD COLUMN IF NOT EXISTS source LowCardinality(String) DEFAULT 'unknown' AFTER event_type,
  ADD COLUMN IF NOT EXISTS event_version UInt8 DEFAULT 1;
