module PaymentSettingsHelper

  def country_select
    [
      ['US'],
      ['AT'],
      ['AU'],
      ['BE'],
      ['CA'],
      ['DE'],
      ['DK'],
      ['ES'],
      ['FI'],
      ['FR'],
      ['GB'],
      ['IE'],
      ['IT'],
      ['JP'],
      ['LU'],
      ['NL'],
      ['NO'],
      ['SE']
    ]
  end

  def default_currency
    [
      ['USD'],
      ['AUD'],
      ['CAD'],
      ['CHF'],
      ['DKK'],
      ['EUR'],
      ['GBP'],
      ['JPY'],
      ['MXN'],
      ['NOK'],
      ['SEK'],
      ['SGD']
    ]
  end

end